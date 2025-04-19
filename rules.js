const HELM_ASCII = [
    '<div style="font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:14px;white-space: pre;background-color: #ffffff; color: #000000;"><div>           N           </div><div>          │▓│          </div><div>          │▓│          </div><div>   \\       │       /   </div><div>     \\  ╦══╪══╦  /     </div><div>      ╦╩   │   ╩╦      </div><div>     ║  \\  │  /  ║     </div><div>    ║     \\│/     ║    </div><div>────╫──────╬──────╫────</div><div>    ║     /│\\     ║    </div><div>     ║  /  │  \\  ║     </div><div>      ╩╦   │   ╦╩      </div><div>     /  ╩══╪══╩  \\     </div><div>   /       │       \\   </div><div>           │           </div><div>                       </div><div>           S           </div></div>',
    '<div style="font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:14px;white-space: pre;background-color: #ffffff; color: #000000;"><div>           N           </div><div>                       </div><div>           │       /▓  </div><div>   \\       │       ▓/  </div><div>     \\  ╦══╪══╦  /     </div><div>      ╦╩   │   ╩╦      </div><div>     ║  \\  │  /  ║     </div><div>    ║     \\│/     ║    </div><div>────╫──────╬──────╫────</div><div>    ║     /│\\     ║    </div><div>     ║  /  │  \\  ║     </div><div>      ╩╦   │   ╦╩      </div><div>     /  ╩══╪══╩  \\     </div><div>   /       │       \\   </div><div>           │           </div><div>                       </div><div>           S           </div></div>',
    '<div style="font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:14px;white-space: pre;background-color: #ffffff; color: #000000;"><div>           N           </div><div>                       </div><div>           │           </div><div>   \\       │       /   </div><div>     \\  ╦══╪══╦  /     </div><div>      ╦╩   │   ╩╦      </div><div>     ║  \\  │  /  ║     </div><div>    ║     \\│/     ║  ┬┬</div><div>────╫──────╬──────╫──▓▓</div><div>    ║     /│\\     ║  ┴┴</div><div>     ║  /  │  \\  ║     </div><div>      ╩╦   │   ╦╩      </div><div>     /  ╩══╪══╩  \\     </div><div>   /       │       \\   </div><div>           │           </div><div>                       </div><div>           S           </div></div>',
    '<div style="font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:14px;white-space: pre;background-color: #ffffff; color: #000000;"><div>           N           </div><div>                       </div><div>           │           </div><div>   \\       │       /   </div><div>     \\  ╦══╪══╦  /     </div><div>      ╦╩   │   ╩╦      </div><div>     ║  \\  │  /  ║     </div><div>    ║     \\│/     ║    </div><div>────╫──────╬──────╫────</div><div>    ║     /│\\     ║    </div><div>     ║  /  │  \\  ║     </div><div>      ╩╦   │   ╦╩      </div><div>     /  ╩══╪══╩  \\     </div><div>   /       │       ▓\\  </div><div>           │       \\▓  </div><div>                       </div><div>           S           </div></div>',
    '<div style="font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:14px;white-space: pre;background-color: #ffffff; color: #000000;"><div>           N           </div><div>                       </div><div>           │           </div><div>   \\       │       /   </div><div>     \\  ╦══╪══╦  /     </div><div>      ╦╩   │   ╩╦      </div><div>     ║  \\  │  /  ║     </div><div>    ║     \\│/     ║    </div><div>────╫──────╬──────╫────</div><div>    ║     /│\\     ║    </div><div>     ║  /  │  \\  ║     </div><div>      ╩╦   │   ╦╩      </div><div>     /  ╩══╪══╩  \\     </div><div>   /       │       \\   </div><div>          │▓│          </div><div>          │▓│          </div><div>           S           </div></div>',
    '<div style="font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:14px;white-space: pre;background-color: #ffffff; color: #000000;"><div>           N           </div><div>                       </div><div>           │           </div><div>   \\       │       /   </div><div>     \\  ╦══╪══╦  /     </div><div>      ╦╩   │   ╩╦      </div><div>     ║  \\  │  /  ║     </div><div>    ║     \\│/     ║    </div><div>────╫──────╬──────╫────</div><div>    ║     /│\\     ║    </div><div>     ║  /  │  \\  ║     </div><div>      ╩╦   │   ╦╩      </div><div>     /  ╩══╪══╩  \\     </div><div>  /▓       │       \\   </div><div>  ▓/       │           </div><div>                       </div><div>           S           </div></div>',
    '<div style="font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:14px;white-space: pre;background-color: #ffffff; color: #000000;"><div>           N           </div><div>                       </div><div>           │           </div><div>   \\       │       /   </div><div>     \\  ╦══╪══╦  /     </div><div>      ╦╩   │   ╩╦      </div><div>     ║  \\  │  /  ║     </div><div>┬┬  ║     \\│/     ║    </div><div>▓▓──╫──────╬──────╫────</div><div>┴┴  ║     /│\\     ║    </div><div>     ║  /  │  \\  ║     </div><div>      ╩╦   │   ╦╩      </div><div>     /  ╩══╪══╩  \\     </div><div>   /       │       \\   </div><div>           │           </div><div>                       </div><div>           S           </div></div>',
    '<div style="font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:14px;white-space: pre;background-color: #ffffff; color: #000000;"><div>           N           </div><div>                       </div><div>  ▓\\       │           </div><div>  \\▓       │       /   </div><div>     \\  ╦══╪══╦  /     </div><div>      ╦╩   │   ╩╦      </div><div>     ║  \\  │  /  ║     </div><div>    ║     \\│/     ║    </div><div>────╫──────╬──────╫────</div><div>    ║     /│\\     ║    </div><div>     ║  /  │  \\  ║     </div><div>      ╩╦   │   ╦╩      </div><div>     /  ╩══╪══╩  \\     </div><div>   /       │       \\   </div><div>           │           </div><div>                       </div><div>           S           </div></div>'
];

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

        this.addChoices(locationData);
    }

    addChoices(locationData) {
        if("Choices" in locationData) {
            for(let choice of locationData.Choices) {
                // if it needs an item but you don't have it, don't display this choice
                if ("NeedItemHeld" in choice && this.engine.storyData.Items[choice.NeedItemHeld].held === false) {
                    continue;
                }
                // if it needs to not have an item but you have it, don't display this choice
                if ("NeedItemNotHeld" in choice && this.engine.storyData.Items[choice.NeedItemNotHeld].held === true) {
                    continue;
                }
                // otherwise, display the choice
                this.engine.addChoice(choice.Text, choice);
            }
        } else {
            this.engine.addChoice("The end");
        }
    }

    handleChoice(choice) {
        // if there are no choices, this is the end!
        if (!choice) {
            this.engine.gotoScene(End);
            return;
        }
        // manage PickUpItem property
        if ("PickUpItem" in choice) {
            this.engine.storyData.Items[choice.PickUpItem].held = true;
        }
        // manage SpecialTarget helm interaction
        if (choice.SpecialTarget === "HelmInteraction") {
            this.engine.show("&gt; "+choice.Text);
            this.engine.gotoScene(HelmInteraction, choice.Target);
            return;
        }
        // show the choice you made and start that target scene
        this.engine.show("&gt; "+choice.Text);
        this.engine.gotoScene(Location, choice.Target);
    }
}

class HelmInteraction extends Location {
    create(key) {
        this.locationData = this.engine.storyData.Locations[key];

        this.bodyText = this.engine.show(this.locationData.Body);

        this.updateHelmText();
    }

    updateHelmText() {
        this.bodyText.innerHTML = HELM_ASCII[this.engine.storyData.HelmAngle];
        super.addChoices(this.locationData);
    }

    handleChoice(choice) {
        if (choice.Text === "<") {
            // decrease HelmAngle, looping around if necessary
            if (--this.engine.storyData.HelmAngle < 0) {
                this.engine.storyData.HelmAngle += HELM_ASCII.length;
            }
            this.updateHelmText();
        }
        else if (choice.Text === ">") {
            // increase HelmAngle, looping around if necessary
            if (++this.engine.storyData.HelmAngle > HELM_ASCII.length-1) {
                this.engine.storyData.HelmAngle -= HELM_ASCII.length;
            }
            this.updateHelmText();
        }
        else {
            super.handleChoice(choice);
        }

        // sets Helm Solved condition to true if its in the correct location, 3 (southeast)
        this.engine.storyData.Items["Helm Solved"].held = (this.engine.storyData.HelmAngle === 3)
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