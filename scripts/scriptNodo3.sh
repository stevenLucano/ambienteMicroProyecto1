echo "Instalando nodeJs..."
sudo apt install nodejs -y

echo "Instalando npm..."
sudo apt install npm -y

echo "Instalando express y consul..."
cd serverN3/app/
sudo npm install express consul

echo "Iniciando agent-two"
consul agent -ui -server -node=agent-three -bind=192.168.100.6 -data-dir=/tmp/consul -config-dir=/etc/consul.d