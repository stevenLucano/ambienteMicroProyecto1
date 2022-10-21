#!/bin/bash
echo "Instalando haproxy..."
sudo apt install haproxy

echo "Installando npm..."
sudo apt install npm -y

#echo "Instalando nodeJs..."
#sudo apt install nodejs -y

#echo "Actualizando nodeJs..."
#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
#source ~/.bashrc
#nvm install [19.0.0]

#echo "Instalando artillery..."
#sudo npm install -g artillery

echo "Iniciando agente-one"
consul agent -ui -server -bootstrap-expect=1 -node=agent-one -bind=192.168.100.4 -client=0.0.0.0 -data-dir=/tmp/consul -config-dir=/etc/consul.d