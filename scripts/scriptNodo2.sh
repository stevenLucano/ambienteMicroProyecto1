echo "Instalando nodeJs..."
sudo apt install nodejs -y

echo "Instalando npm..."
sudo apt install npm -y

echo "Instalando express y consul..."
cd serverN2/app/
sudo npm install express consul

echo "Iniciando agent-two"
consul agent -ui -server -node=agent-two -bind=192.168.100.5 -data-dir=/tmp/consul -config-dir=/etc/consul.d