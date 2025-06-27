#!/bin/bash

echo "1. Get all rate limits"
curl -X GET http://localhost:8000/limits
echo -e "\n"

echo "2. Set a new rate limit for user 'alice'"
curl -X POST http://localhost:8000/limits \
  -H "Content-Type: application/json" \
  -d '{"user":"alice","limit":100}'
echo -e "\n"

echo "3. Get rate limit for user 'alice'"
curl -X GET http://localhost:8000/limits/alice
echo -e "\n"

echo "4. Delete rate limit for user 'alice'"
curl -X DELETE http://localhost:8000/limits/alice
echo -e "\n"