# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  #config.vm.synced_folder './src', '/home/vagrant/src'
  config.vm.provision "shell", path: "scriptConsul.sh"

  if Vagrant.has_plugin? "vagrant-vbguest"
    config.vbguest.no_install  = true
    config.vbguest.auto_update = false
    config.vbguest.no_remote   = true
  end

  config.vm.define :nodo1 do |nodo1|
    nodo1.vm.box = "bento/ubuntu-20.04"
    nodo1.vm.network :private_network, ip: "192.168.100.4"
    nodo1.vm.hostname = "nodo1"
    nodo1.vm.provision "shell", path: "./scripts/scriptNodo1.sh"
  end

  config.vm.define :nodo2 do |nodo2|
    nodo2.vm.box = "bento/ubuntu-20.04"
    nodo2.vm.network :private_network, ip: "192.168.100.5"
    nodo2.vm.hostname = "nodo2"
    nodo2.vm.provision "shell", path: "./scripts/scriptNodo2.sh"
  end

  config.vm.define :nodo3 do |nodo3|
    nodo3.vm.box = "bento/ubuntu-20.04"
    nodo3.vm.network :private_network, ip: "192.168.100.6"
    nodo3.vm.hostname = "nodo3"
    nodo3.vm.provision "shell", path: "./scripts/scriptNodo3.sh"
  end
end
