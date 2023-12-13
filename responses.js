function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hi babe") {
        return "hello babe!";
    } else if (input == "how are you?") {
        return "i'm fine babe😚";
    } else if (input == "that's good to hear") {
        return "i miss you babe🥺";
    } else if (input == "i miss you too") {
        return "😍";
    } else if (input == "let's dinner later okay?") {
        return "okay babe❤";
    } else if (input == "babe i'll talk to you later okay iloveyou") {
        return "okay babe take care iloveyoutoo!";
    } else {
        return "Try asking something else!";
    }
}