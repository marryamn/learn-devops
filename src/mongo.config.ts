import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

export const mongooseConfig = [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ['.env.local', '.env'], // Prioritize local env file
    }),
    MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => {
            // Check if running in Docker
            const isDocker = process.env.DOCKER === 'true';

            // Define connection strings
            const localConnectionString = configService.get<string>('LOCAL_MONGODB_URI', 'mongodb://localhost:27017/store');
            const dockerConnectionString = configService.get<string>('DOCKER_MONGODB_URI', 'mongodb://mongo:27017/store');

            return {
                uri: isDocker ? dockerConnectionString : localConnectionString,
                // Additional Mongoose options if needed
                // autoCreate: true, // Uncomment if you want to auto-create collections
            };
        },
        inject: [ConfigService],
    }),
];