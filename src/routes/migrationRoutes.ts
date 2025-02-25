import { Router } from 'express';
import { MigrationController } from '../controllers';

const router = Router();
const migrationController = new MigrationController();

export const setMigrationRoutes = () => {
    router.post('/migrate', migrationController.startMigration.bind(migrationController));
    return router;
};