# NileBridge (EYOUTH-31003191600697-ShopSphere)
This is a fullstack, tested, e-commerce platform as a graduation project for Level 5 Web in DECI.

## Project Links
This contains all the links in the project that you may want:
1. https://nile-bridge.vercel.app (The main website).
2. https://nile-bridge-backend.vercel.app (The backend).
3. https://nile-bridge-backend.vercel.app/health (The health endpoint).
4. https://nile-bridge-reviews-service.vercel.app/get?productId=1862 (Review service test end-point)
5. https://nile-bridge-backend.vercel.app/api/run-analytics (The standalone serverless function).

<strong>**Note<strong> The frontend serves static images for products since serving them from Vercel in the backend is not efficient.

## Task 1
Here are the completed subtasks for Task 1:
1. Deployed the frontend to Vercel in https://nile-bridge.vercel.app
2. Deployed the backend to Vercel in https://nile-bridge-backend.vercel.app
3. Moved the postgres database from a local one to supabase.
4. Added health endpoint which is visible in https://nile-bridge-backend.vercel.app/health
5. Added security practices to the server (rate limiting, configured cors, integrated helmet), and you can see them in [index.ts](packages/backend/src/index.ts).
6. Registered health endpint with Uptime Robot.
7. The task requires to add a project links file, which was added in [Tasks1 folder](EYOUTH-31003191600697-ShopSphere-Task1/EYOUTH-31003191600697-ProjectLinks.md).

You can also view the Task 1 folder in EYOUTH-31003191600697-ShopSphere-Task1 Folder.

## Task 2
Here are the completed tasks for Task 2:
1. Added the [Architecture Diagram](EYOUTH-31003191600697-ShopSphere-Task2/EYOUTH-31003191600697-ShopSphere-ArchitectureDiagram.pdf) which explains the production deployment in Task 1.
2. Classified the three services into SaaS/PaaS/IaaS in [here](EYOUTH-31003191600697-ShopSphere-Task2/EYOUTH-31003191600697-ShopSphere-ServiceClassification.pdf)
3. Successfuly made the multi-cloud namespace simulation, and to try it yourself you need to follow the steps below:

You can view the Task 2 folder in EYOUTH-31003191600697-ShopSphere-Task2 folder.

### Testing the Kubernetes namespaces multi-cloud simulation
If you don't want to build the docker images locally then you can review both yaml files and check that they create both services at [Backend.yaml](packages/backend/EYOUTH-31003191600697-ShopSphere-backend.yaml) and [Frontend.yaml](packages/frontend/EYOUTH-31003191600697-ShopSphere-frontend.yaml).

To test the multi-cloud namespace simulation you need to build the docker images locally for the frontend and backend by running these commands:
1. `docker build -t backend . -f packages/backend/Dockerfile` To build the backend image.
2. `docker build -t frontend . -f packages/frontend/Dockerfile` To build the frontend image.

Now we need to create the namespaces and apply the yaml files that create the services for each namespace:
1. `kubectl create namespace aws-simulation`
2. `kubectl create namespace gcp-simulation`
3. `kubectl apply -f packages/frontend/EYOUTH-31003191600697-ShopSphere-frontend.yaml -n aws-simulation`
4. `kubectl apply -f packages/backend/EYOUTH-31003191600697-ShopSphere-backend.yaml -n aws-simulation`
5. `kubectl apply -f packages/frontend/EYOUTH-31003191600697-ShopSphere-frontend.yaml -n gcp-simulation`
6. `kubectl apply -f packages/backend/EYOUTH-31003191600697-ShopSphere-backend.yaml -n gcp-simulation`

Now we can test them by getting the services in each namespace:
1. `kubectl get services -n aws-simulation`.
2. `kubectl get services -n gcp-simulation`.

And you can forward to each service:
1. `kubectl port-forward service/frontend-service 5173:5173 -n aws-simulation` (Frontend in aws-simulation).
2. `kubectl port-forward service/backend-service 3000:3000 -n aws-simulation` (Backend in aws-simulation).
3. `kubectl port-forward service/frontend-service 5173:5174 -n gcp-simulation` (Frontend in gcp-simulation).
4. `kubectl port-forward service/backend-service 3000:3001 -n aws-simulation` (Backend in gcp-simulation).

## Task 3
Task 3 requires the following:
1. Moving the review service into its own deployment/code base and making the application a microservice application, which was done and it was extracted outside the main backend code and you can view its own code in https://nile-bridge-reviews-service.vercel.app/get?productId=1678 (you can change the productId but make sure that the product exists first).
2. Add REST communication between the main application and the review service, which was added since the frontend can access the review service directly to get reviews of specific products, and both backends (review service and main backend) can communicate to extract information.
3. Serverless function integration, which was created as a analytics serverless function that you can view in https://nile-bridge-backend.vercel.app/api/run-analytics, which is outside the main backend code (in dedicated /api folder) and is deployed as its own standalone serverless function in vercel and should run by scheduled amount.
4. Created an Architecture Decision Record explaining the decisions taken in each sub-task, you can view it in [here](./EYOUTH-31003191600697-ShopSphere-Task3/EYOUTH-31003191600697-ShopSphere-ArchitectureDecisionRecord.md)

You can view the main folder for Task 3 in [EYOUTH-31003191600697-ShopSphere-Task3](./EYOUTH-31003191600697-ShopSphere-Task3/).

## Task 4
1. Added CI/CD Pipeline in github actions that adapts to this criteria.
2. GitHub secrets can be added for security but aren't needed according to the current work-flow.
3. Added structured logging using the `morgan` library for express which states the endpoint of each request and colors them according to the response (red for errors, yellow for subtle errors, ..etc).
4. Added a rollback plan in [Rollback](./EYOUTH-31003191600697-ShopSphere-Task4/EYOUTH-31003191600697-ShopSphere-Rollback.md).
5. Added [project links](./EYOUTH-31003191600697-ShopSphere.md)

## Extra notes
1. AI was only used to generate boiler-plate yaml code, guide me in new topics (especially in github actions), and help debug errors (especially in deployment), and write boiler-plate code.
2. Student-ID: EYOUTH-31003191600697-ShopSphere.
