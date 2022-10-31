#!/bin/bash
scp -P 40422 -r ./dist/* vr06@140.130.36.127:/usr/share/nginx/isimple
rm -rf ./dist