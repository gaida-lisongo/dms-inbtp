// This file exports interfaces and types used throughout the application.

export interface MigrationData {
    id: number;
    name: string;
    email: string;
    // Add other fields as necessary
}

export interface MigrationResponse {
    success: boolean;
    message: string;
    migratedCount?: number;
}