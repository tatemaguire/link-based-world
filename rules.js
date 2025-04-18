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
                if ("SpecialTarget" in choice) {
                    
                }
                this.engine.addChoice(choice.Text, choice);
            }
        } else {
            this.engine.addChoice("The end");
        }
    }

    handleChoice(choice) {
        if (!choice) {
            this.engine.gotoScene(End);
        }
        else if ("Target" in choice) {
            this.engine.show("&gt; "+choice.Text);
            this.engine.gotoScene(Location, choice.Target);
        }
        else {
            this.engine.show("&gt; "+choice.Text);
            switch (choice.SpecialTarget) {
                case "Rusty Key":
                    this.engine.storyData.Items["Rusty Key"].held = true;
                    break;
            }
        }
    }
}

class HelmInteraction extends Scene {
    create(key) {
        
        this.helmText = this.engine.show("");
        this.angle = 0;
        this.helmText.innerHTML = this.angle;

        let locationData = this.engine.storyData.Locations["Helm Interaction"];
        if("Choices" in locationData) {
            for(let choice of locationData.Choices) {
                this.engine.addChoice(choice.Text, choice);
            }
        } else {
            this.engine.addChoice("The end.")
        }
    }

    handleChoice(choice) {
        if (choice.Text === "<") {
            this.helmText.innerHTML = --this.angle;
        }
        else if (choice.Text === ">") {
            this.helmText.innerHTML = ++this.angle;
        }
        else {
            this.engine.gotoScene("Helm");
        }

    }
}

class End extends Scene {
    create() {
        this.engine.show("<hr>");
        this.engine.show(this.engine.storyData.Credits);
    }
}

Engine.load(Start, 'myStory.json'); // starts the game