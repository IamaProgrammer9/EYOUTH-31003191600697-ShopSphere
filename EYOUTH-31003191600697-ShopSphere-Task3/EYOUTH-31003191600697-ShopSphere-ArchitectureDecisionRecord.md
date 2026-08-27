# Architecture Decision Record for Task 3
## Which part was move into a microservice?
The <strong>reviews service</strong> was moved into a microservice, you can access it via:
1. https://nile-bridge-reviews-service.vercel.app/get (Requires a productId to get the review of)
2. https://nile-bridge-reviews-service.vercel.app/write (Requires a jwt authentication token and a productId)

## Which part was moved to serverless
The Analytics part was moved into serverless, it is deployed inside its own /api folder in the backend and should automatically run every while to get the analytics.

You can visit it in https://nile-bridge-backend.vercel.app/api/run-analytics

## The reason behind each of the two decisions
### Moving review service to a micro service
This service was moved into its own micro service because its own logic aside from the main backend, and uses a different type of database (MongoDB) instead of PostegreSQL, so moving it alone can make the developer focus on improving it without overlapping with the main application.

### Moving the analytics service into its own serverless function
The analytics service was moved into its own serverless function because its not a user-consuming route, and needs to be run regularly to keep track of the analytics of the application (user count, product count), so we can keep track of the improvement of the platform, so moving it out of the main application allows us to focus on the developmetn of the main application.