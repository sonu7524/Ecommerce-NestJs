import { ConfigModule, ConfigService } from "@nestjs/config";

export const DataSource = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        migrationsRun: true,
        migrations: ['dist/db/migrations/*{.js,.ts}'],
        synchronize: true, // Set to false in production and use migrations
    }),
    inject: [ConfigService],
}