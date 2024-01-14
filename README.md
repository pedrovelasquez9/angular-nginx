# AngularNginx

This is a project for a video tutorial explaining how to install and configure Nginx and deploy an Angular application on the server.

## Video Link

## Nginx install and configure steps

Assuming that you're connected to your server with Ubuntu, for instance, via ssh, you can follow these steps to isntall and configure Nginx:

- Execute **sudo apt update**: updates local package list index
- Execute **sudo apt install nginx**: install nginx
- Execute **sudo ufw allow 'Nginx HTTP'**: Opens only port 80 in the server, other options are **Nginx Full** for both 80 and 443 and **Nginx HTTPS** for 443 only
- Execute **systemctl status nginx**: checks the status of Nginx service

## Uploading files/directory (recursive) to your server

- scp -P1234 -r /local-path user@ip:/server-path/

## Avoiding angular 404 error at refresh in routes

Edit the **/etc/nginx/sites-available/default** file and add/edit this block:

- If your app is in root folder **/var/www/html**:

```
    location / {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            try_files $uri $uri/ =404 index.html;
    }
```

- If your app files are located in a sub-folder, for example, **/var/www/html/angular-app**:

```
    location /angular-app {
            alias /var/www/html/angular-app;
            try_files $uri $uri/ /index.html index.html;
            index  index.html;
    }
```
