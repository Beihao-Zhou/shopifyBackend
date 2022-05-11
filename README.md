# Shopify Fall 2022 Backend Intern Challenge

## Production

The app is run on [Replit](https://shopifyBackend.beihaozhou.repl.co)

## Endpoints
The methods of creating and getting all inventories live at the `https://shopifyBackend.beihaozhou.repl.co/inventory` endpoint, deleting and updating inventories can be done by sending request to `https://shopifyBackend.beihaozhou.repl.co/inventory/:id`, where `id` is the inventory id and you can get that by sending get request first.

## Additional Feature
I chose the second feature that locations of inventories can also be created. Each location has its ID, which is associated with the field `locationId` of inventory schema.
The methods of creating and getting all locations live at the `https://shopifyBackend.beihaozhou.repl.co/location` endpoint, deleting is also implemented and you can send the request to `https://shopifyBackend.beihaozhou.repl.co/location/:id`.
