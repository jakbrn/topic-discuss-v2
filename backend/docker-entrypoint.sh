#!/bin/sh

# Wait for the database to be ready (adjust the URL as needed)
echo "Waiting for database..."
sleep 5

# Run migrations
echo "Running migrations..."
npx prisma migrate deploy

# Start the application
echo "Starting application..."
node dist/main