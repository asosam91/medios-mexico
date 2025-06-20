#!/bin/bash
set -e

AVAILABLE="/etc/nginx/sites-available/medios-mexico"
ENABLED="/etc/nginx/sites-enabled/medios-mexico"
ROOT_DIR="/var/www/medios-mexico"
SERVER_NAME="medios-mexico.adriansosa.net"

CONFIG="server {\n    listen 80;\n    server_name $SERVER_NAME;\n    root $ROOT_DIR;\n    index index.html;\n    location / {\n        try_files $uri $uri/ /index.html;\n    }\n}\n"

if [ ! -f "$AVAILABLE" ]; then
  echo -e "$CONFIG" > "$AVAILABLE"
  ln -s "$AVAILABLE" "$ENABLED"
else
  echo -e "$CONFIG" > "$AVAILABLE"
fi

nginx -t
systemctl restart nginx

