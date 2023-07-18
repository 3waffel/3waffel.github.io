{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    utils,
  }:
    utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {inherit system;};
        lib = pkgs.lib;
      in rec {
        packages.site = pkgs.stdenv.mkDerivation {
          name = "site";
          src = ./site;
          buildInputs = with pkgs; [
            zola
          ];
          phases = ["buildPhase" "installPhase"];
          buildPhase = ''
            cp -r $src/. .
            zola build
          '';
          installPhase = ''
            cp -r public $out
          '';
          ZOLA_ENV = "prod";
        };

        defaultPackage = packages.site;

        devShell = with pkgs;
          mkShell {
            buildInputs = [
              zola
            ];
          };
      }
    );
}
