import { logger } from '@beanc16/logger';
import DotnetResponses from 'dotnet-responses';
import type express from 'express';
import jwt from 'jsonwebtoken';

const { Forbidden, Unauthorized } = DotnetResponses;

export type TokenData = string | Buffer | object;

export const getAccessToken = (data: TokenData): string => {
    const token = jwt.sign(data, process.env.JWT_SECRET as string, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
};

const sendForbiddenError = (message: string, res: express.Response, err: jwt.VerifyErrors | null | string | jwt.JwtPayload | undefined): void => {
    logger.warn(message, err);

    Forbidden.json({
        res,
    });
};

export const authenticateTokenServiceToService = (req: express.Request, res: express.Response, next: express.NextFunction): void =>
{
    const {
        headers: {
            authorization = 'Bearer ',
        } = {},
    } = req;

    const [_, token] = authorization.split(' ');

    if (!token)
    {
        Unauthorized.json({
            res,
        });
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decodedData) =>
    {
        if (err)
        {
            sendForbiddenError('Failed to authenticate', res, err);
            return;
        }

        if (!decodedData || decodedData instanceof String)
        {
            sendForbiddenError('Invalid jwt data', res, decodedData);
            return;
        }

        const { calledBy } = decodedData as jwt.JwtPayload;
        if (!calledBy || calledBy.trim().length === 0)
        {
            sendForbiddenError('Invalid calledBy property in jwt', res, decodedData);
            return;
        }

        res.locals.decodedAuthorization = decodedData;
        next();
    });
};
