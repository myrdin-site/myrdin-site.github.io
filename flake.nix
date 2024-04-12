{
  description = "SQRL  setup (python jax cuda)";
  
  inputs = {
    nixpkgs = {
      url = "github:NixOS/nixpkgs/nixos-unstable";
    };
  };

  outputs = { self, nixpkgs }:
    let
      pkgs = {
        x86_64-linux =  import nixpkgs { 
            system = "x86_64-linux"; 
        };
        x86_64-darwin = import nixpkgs { 
          system = "x86_64-darwin"; 
        };
        aarch64-linux = import nixpkgs { 
          system = "aarch64-linux"; 
        };
        riscv64-linux = import nixpkgs { 
          system = "riscv64-linux"; 
        };
      };
      sqrl = ps : ps.buildPythonPackage {
        name = "sqrl";
        src = ".";
        propagatedBuildInputs = with ps; [
          jax
        ];
      };
      modules = pkgs: with pkgs; [ 
        hugo
      ];
    in {
      devShells = {
        x86_64-linux = {
          saule = pkgs.x86_64-linux.pkgs.mkShell {
            buildInputs = modules pkgs.x86_64-linux;
          };
        };
      };
      defaultPackage = {
        x86_64-linux = pkgs.x86_64-linux.mkShell {
          buildInputs = modules pkgs.x86_64-linux;
        };
        x86_64-darwin = pkgs.x86_64-darwin.mkShell { 
          buildInputs = modules pkgs.x86_64-darwin;
        };
        riscv64-linux = pkgs.riscv64-linux.mkShell { 
          buildInputs = modules pkgs.riscv64-linux;
        };
        aarch64-linux = pkgs.aarch64-linux.mkShell { 
          buildInputs = modules pkgs.aarch64-linux;
        };
      };
    };
}
