FROM nixos/nix:latest
RUN ["nix-channel",
    "--add https://nixos.org/channels/nixpkgs-unstable"]
RUN ["nix-channel",
    "--update"]
RUN ["nix-env",
    "-i nodejs"]
