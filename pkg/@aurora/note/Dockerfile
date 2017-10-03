FROM nixos/nix:latest
RUN ["nix-channel",
    "--add https://nixos.org/channels/nixpkgs-unstable"]
RUN ["nix-channel",
    "--update"]
RUN ["nix-env",
    "-i nodejs"]

WORKDIR /usr/src/app
COPY package.json .
RUN ["npm", "i"]

EXPOSE 8080
CMD ["npm", "start"]
