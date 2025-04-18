class Start extends Scene {
    create() {
        this.engine.setTitle(this.engine.storyData.Title);
        this.engine.addChoice("Start");
    }

    handleChoice() {
        this.engine.gotoScene(Location, this.engine.storyData.InitialLocation);
    }
}

class Location extends Scene {
    create(key) {
        let locationData = this.engine.storyData.Locations[key];
        this.engine.show(locationData.Body);

        if("Choices" in locationData) {
            for(let choice of locationData.Choices) {
                this.engine.addChoice(choice.Text, choice);
            }
        } else {
            this.engine.addChoice("The end");
        }
    }

    handleChoice(choice) {
        if (!choice) {
            this.engine.gotoScene(End);
            return;
        }
        this.engine.show("&gt; "+choice.Text);
        this.engine.gotoScene(Location, choice.Target);
    }
}

class End extends Scene {
    create() {
        this.engine.show("<hr>");
        this.engine.show(this.engine.storyData.Credits);
        this.engine.show("<hr>");
        // reset inventory
        for (let item in this.engine.storyData.Items) {
            this.engine.storyData.Items[item].held = false;
        }
        // go to the start of the game
        this.engine.gotoScene(Start);
    }
}

Engine.load(Start, 'myStory.json'); // starts the game