import { Router } from 'express';
import { MigrationController } from '../controllers';

const router = Router();
const migrationController = new MigrationController();

router.post('/migrate', migrationController.startMigration.bind(migrationController));

export default router;