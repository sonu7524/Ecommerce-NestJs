import { BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException, UnauthorizedException } from "@nestjs/common";

export class ApiError extends Error {
    status: number;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }

    static BadRequest(message: string) {
        throw new BadRequestException(message);
    }

    static Unauthorized(message: string) {
        throw new UnauthorizedException(message);
    }

    static Forbidden(message: string) {
        throw new ForbiddenException(message);
    }

    static NotFound(message: string) {
        throw new NotFoundException(message);
    }

    static Internal(message: string) {
        throw new InternalServerErrorException(message);
    }

    static Conflict(message: string) {
        throw new ConflictException(message);
    }
}