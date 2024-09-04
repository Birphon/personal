FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    software-properties-common \
    wget \
    gdebi-core \
    libgl1-mesa-dri:i386 \
    && rm -rf /var/lib/apt/lists/*

# Download and install Steam
RUN wget https://steamcdn-a.akamaihd.net/client/installer/steam.deb
RUN gdebi --non-interactive steam.deb

# Install other dependencies
RUN apt-get install -y \
    autohotkey \
    xvfb \
    xserver-xephyr \
    && rm -rf /var/lib/apt/lists/*

COPY click_every_3_hours.ahk /root/click_every_3_hours.ahk

ENTRYPOINT ["/bin/bash", "-c", "Xvfb :0 & DISPLAY=:0 xephyr -ac -br -noreset -screen 800x600 & sleep 3 && DISPLAY=:0 steam && autohotkey /root/click_every_3_hours.ahk"]