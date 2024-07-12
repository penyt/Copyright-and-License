cd /etc/dnsmasq.d/

# add "address=/hi.my.domain/192.168.0.1"
sudo nano 05-wildcard.conf

service pihole-FTL restart
