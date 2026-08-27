# Rollback plan
This plan utilizes a blue/green rollback plan where it monitorss the [health endpoint](https://nile-bridge-backend.vercel.app/health) and the logs from the morgan library.

## Detection
it actively monitors the [health endpoint](https://nile-bridge-backend.vercel.app/health) and the logs from the morgan library.

## Restore
This follows a blue/green environment plan and the steps are as follows:
1. Restore the previous version using vercel's instant rollback feature (you can see in the dashboard).
2. If it doesn't work, then head to the main repo and check the last working commit of the main branch and deploy it from the vercel dashboard.