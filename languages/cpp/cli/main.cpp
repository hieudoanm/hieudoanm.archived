#include <iostream>
#include <string>
#include <vector>

void help() {
    std::cout << "Available commands:\n";
    std::cout << "  help         Display this help message\n";
    std::cout << "  greet [name] Greet the user by name\n";
    std::cout << "  exit         Exit the CLI\n";
}

void greet(const std::string& name) {
    std::cout << "Hello, " << name << "!\n";
}

int main(int argc, char* argv[]) {
    std::string command;

    // Show welcome message
    std::cout << "Welcome to the CLI application. Type 'help' for a list of commands.\n";

    while (true) {
        // Prompt for input
        std::cout << "> ";
        std::getline(std::cin, command);

        // Handle the 'help' command
        if (command == "help") {
            help();
        }
        // Handle the 'exit' command
        else if (command == "exit") {
            std::cout << "Exiting the CLI. Goodbye!\n";
            break;
        }
        // Handle the 'greet' command
        else if (command.rfind("greet", 0) == 0) { // Check if the command starts with 'greet'
            std::string name = command.substr(6); // Extract the name
            if (!name.empty()) {
                greet(name);
            } else {
                std::cout << "Usage: greet [name]\n";
            }
        }
        // Handle unknown commands
        else {
            std::cout << "Unknown command. Type 'help' for a list of commands.\n";
        }
    }

    return 0;
}
