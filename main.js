// Prompt Sync =========================================================

const prompt = require('prompt-sync')({sigint: true});

// Multiline Bug Fix ===================================================

const multiLinePrompt = ask => {                                                          
    const lines = ask.split(/\r?\n/);                                                     
    const promptLine = lines.pop();                                                       
    console.log(lines.join('\n'));                                                        
    return prompt(promptLine);                                                            
}; 

// Starting Position ===================================================

let x = 0;

let y = -6;

let location = "\n\
You are standing alone in a vast FOYER:\n\
\n\
NORTH, is a long hallway stretching to the end of the mansion.\n\
\n\
WEST, is an ornate door leading to another room.\n\
\n\
SOUTH, through a window you can see an ancient forest that surrounds\n\
the home, figures with pale scaly skin in dark robes have emerged\n\
bearing torches and chanting in a strange language.\n\
\n\
EAST, is a modest looking door that leads to another room.";

// Starting Prompt ====================================================

let start = multiLinePrompt("\n\
\n\
Professor Freeman,\n\
\n\
For the past two months I have been working undercover for the\n\
Braithwhite family in their mansion located in the outskirts\n\
of Arkham. Recently I witnessed the Braithwhite family, and their\n\
strange guests participate in a dark and twisted ritual. I fear to\n\
describe the specifics of the ritual because every time I think\n\
about what I witnessed I begin to feel my sanity slip away.\n\
After the ritual I noticed several ancient runes painted on some\n\
of the walls that looked exactly like the ones we studied in your\n\
class at Miskatonic University. I think this family is up to \n\
something nefarious and they are ramping up to something big.\n\
Please come quickly Professor, I cannot do this alone. The family\n\
does not know who I really am, but some of the regular staff has gone\n\
missing and I fear for my life.\n\
\n\
Sincerely,\n\
Atticus\n\
\n\
\n\
When you arrived, the mansion doors were wide open, and you stepped\n\
into the dark and empty front room. You close the doors behind you\n\
and turn on your flashlight. You need to find Atticus and help him\n\
and stop whatever the Braithwhite family is planning.\n\
\n\
press ENTER to START");
 
// Movement Loop Start =====================================================

while (location !== "Secret Lab") {
    
    console.log("");

    console.log("(",x,",",y,")");

    console.log(location);
    
    start = multiLinePrompt("Choose a direction, 'north','south', 'east', or 'west' :    ");

// IF Movement Statements =============================================================

  if (start === "west") {
    
        x = x - 3;  

    }
       
    if (start === "east") { 

       x = x + 3;

    } if (start === "north") {

        y = y + 3;
        

    } if (start === "south") { 

        y = y - 3;
        
    }

// MANSION LOCATIONS ==================================================

// Ancient Forrest & Chanting Cultists ================================

    if (x >= -10 && x <= 10 && y >= -10 && y <= -6) {
        
        location = "\n\
You are in front of the mansion in an ancient forest. The chorus of\n\
the cultists is getting louder and louder. The torches are getting\n\
closer, you decipher the words ‘Cthulhu’, ‘Azathoth’, and ‘Nyarlathotep’,\n\
from their incessant chanting.\n\
You will soon be surrounded.\n\
\n\
NORTH, is the Braithwhite mansion.\n\
\n\
EAST, In the distance past the ancient forest there is only a foreboding darkness.\n\
\n\
SOUTH, In the distance past the ancient forest there is only a foreboding darkness.\n\
\n\
WEST, In the distance past the ancient forest there is only a foreboding darkness.";
    
    }

// Foyer ==============================================================

    if (x >= -2 && x <= 2 && y >= -6 && y <= -2) {
        
        location = "\n\
You are standing alone in a vast FOYER:\n\
\n\
NORTH, is a long hallway stretching to the end of the mansion.\n\
\n\
EAST, is a modest looking door that leads to another room.\n\
\n\
SOUTH, through a window you can see the ancient forest that surrounds\n\
the home, figures with pale scaly skin in dark robes have emerged\n\
bearing torches and chanting in a strange language.\n\
\n\
WEST is an ornate door leading to another room.";

    }

// Dinning Room ========================================================

    if (x >= -6 && x <= -2 && y >= -6 && y <= -2) {
        
        location = "\n\
You are in a FORMAL DINING ROOM, the room glitters with\n\
fine silverware. The walls are decorated with paintings of rotting\n\
fruit. There is no one else in the room.\n\
\n\
NORTH, you hear what some might call music.\n\
\n\
EAST, there is an ornate door leading to the FOYER.\n\
\n\
SOUTH, through a window you can see is an ancient forest that\n\
surrounds the home, figures with pale scaly skin in dark robes\n\
have emerged bearing torches and chanting in a strange language.\n\
\n\
WEST, is an ornate door with a brass plaque that reads STUDY";

    }

// Sitting Room =========================================================

    if (x >= -10 && x <= -6 && y >= -6 && y <= -2) {
        
        location = "\n\
You are in the study; you notice a cigar still burning in\n\
an ashtray next to a leather chair. You are not alone in this\n\
house. You notice a closed book on the large oak desk on the\n\
opposite side of the room. The gold letters of the cover reflect\n\
in the dim light, it reads BOOK OF AZATHOTH.\n\
\n\
NORTH, is a door that leads to another room. There is a brass plaque\n\
on the door that reads GAMES ROOM.\n\
\n\
EAST, is an ornate door with a brass plaque that reads DINNING ROOM.\n\
\n\
SOUTH, through a window you can see the ancient forest that surrounds\n\
the home, figures with pale scaly skin in dark robes have emerged\n\
bearing torches and chanting in a strange language.\n\
\n\
WEST, through a window all you see is darkness.";

    }

// Kitchen ===============================================================

    if (x >= 2 && x <= 6 && y >= -6 && y <= -2) {
        
        location = "Kitchen";
    
    }

// Freezer ==============================================================

    if (x >= 6 && x <= 10 && y >= -6 && y <= -2) {
        
        location = "freezer";
    
    }
    
// Green Servant Room ==================================================

    if (x >= 6 && x <= 10 && y >= -2 && y <= 2) {
        
        location = "green servant room";
    
    }

// Blue Servant Room ===================================================

    if (x >= 2 && x <= 6 && y >= -2 && y <= 2) {
        
        location = "Blue servant room";
    
    }

// Hallway H1 ==========================================================

    if (x >= -2 && x <= 2 && y >= -2 && y <= 2) {
        
        location = "Hallway H1";
    
    }

// Music Room ==========================================================

    if (x >= -6 && x <= -2 && y >= -2 && y <= 2) {
        
        location = "Music room";
    
    }

// Billiards Room =======================================================

    if (x >= -10 && x <= -6 && y >= -2 && y <= 2) {
        
        location = "\n\
There is a billiards table in the middle of the room.\n\
In each of the corner pockets you find a severed foot.\n\
The fabric of the table is stained with blood. There are\n\
symbols painted on the walls with blood. You notice rusty\n\
chains hanging from the walls. At the end of the chains,\n\
you find sharp metal hooks dripping with more blood.\n\
The room smells like pennies and the vomit you were unable\n\
to hold back.\n\
\n\
NORTH, You hear voices coming from a bookshelf.\n\
\n\
EAST, You hear strange music.\n\
";
    
    }

// Secret Lab Room ======================================================

    if (x >= -10 && x <= -6 && y >= 2 && y <= 6) {
        
        location = "Secret Lab";
    
    }

// Bathroom 2 ===========================================================

    if (x >= -6 && x <= -2 && y >= 2 && y <= 6) {
        
        location = "Second Bathroom";
    
    }

// Hallway H2 ===========================================================

    if (x >= -2 && x <= 2 && y >= 2 && y <= 6) {
        
        location = "Hallway 2";
    
    }

// Master Bedroom =======================================================

    if (x >= 2 && x <= 6 && y >= 2 && y <= 6) {
        
        location = "Master Bedroom";
    
    }

// Bathroom 1 ===========================================================

    if (x >= 6 && x <= 10 && y >= 2 && y <= 6) {
        
        location = "Master Bathroom";
    
    }

// Nanny Room ===========================================================

    if (x >= 6 && x <= 10 && y >= 6 && y <= 10) {
        
        location = "Nanny Room";
    
    }

// Nursery Room =========================================================

    if (x >= 2 && x <= 6 && y >= 6 && y <= 10) {

        location = "Nursery";
    
    }

// Hallway H3 ============================================================

    if (x >= -2 && x <= 2 && y >= 6 && y <= 10) {

        location = "Hallway 3";

    }

// Bedroom 2 =============================================================

    if (x >= -6 && x <= -2 && y >= 6 && y <= 10) {

        location = "Guest Bedroom";

    }

// Library ===============================================================

    if (x >= -10 && x <= -6 && y >= 6 && y <= 10) {
        
        location = "Library";

    }

// THE VOID WEST =========================================================

    if (x <= -10 && x >= -20 && y >= -20 && y <= 20) {

        location = "\n\
You have entered a black void in the fabric of reality.\n\
You are outside of thought and existence\n\
You do not remember who or what you are.\n\
You do not know why you are.\n\
You feel insignificant in the depths of the darkness.\n\
You feel emptiness around you.\n\
You feel emptiness inside you.\n\
You are the emptiness.\n\
You start laughing.\n\
You cannot stop laughing.\n\
You are in pain.\n\
The pain is real, the pain is human, you are able to move again.\n\
A voice echoes in the darkness 'GO BACK!\n\
The voice sounds familiar.\n\
It is your voice.\n\
You remember the mansion and Atticus.\n\
If you don't go back you fear you might be stuck in a meaningless\n\
loop in the dark void";

    }

// THE VOID EAST =========================================================

    if (x >= 10 && x <= 20 && y >= -20 && y <= 20) {

        location = "\n\
You have entered a black void in the fabric of reality.\n\
You are outside of thought and existence\n\
You do not remember who or what you are.\n\
You do not know why you are.\n\
You feel insignificant in the depths of the darkness.\n\
You feel emptiness around you.\n\
You feel emptiness inside you.\n\
You are the emptiness.\n\
You start laughing.\n\
You cannot stop laughing.\n\
You are in pain.\n\
The pain is real, the pain is human, you are able to move again.\n\
A voice echoes in the darkness 'GO BACK!\n\
The voice sounds familiar.\n\
It is your voice.\n\
You remember the mansion and Atticus.\n\
If you don't go back you fear you might be stuck in a meaningless\n\
loop in the dark void";
         
    }

// THE VOID NORTH =========================================================

    if (x >= -10 && x <= 10 && y <= 20 && y >= 10) {

        location = "\n\
You have entered a black void in the fabric of reality.\n\
You do not remember who or what you are.\n\
You are outside of thought and existence\n\
You do not know why you are.\n\
You feel insignificant in the depths of the darkness.\n\
You feel emptiness around you.\n\
You feel emptiness inside you.\n\
You are the emptiness.\n\
You start laughing.\n\
You cannot stop laughing.\n\
You are in pain.\n\
The pain is real, the pain is human, you are able to move again.\n\
A voice echoes in the darkness 'GO BACK!\n\
The voice sounds familiar.\n\
It is your voice.\n\
You remember the mansion and Atticus.\n\
If you don't go back you fear you might be stuck in a meaningless\n\
loop in the dark void";

    }

// THE VOID SOUTH =========================================================

    if (x >= -10 && x <= 10 && y <= -10 && y >= -20) {

        location = "\n\
You have entered a black void in the fabric of reality.\n\
You are outside of thought and existence\n\
You do not remember who or what you are.\n\
You do not know why you are.\n\
You feel insignificant in the depths of the darkness.\n\
You feel emptiness around you.\n\
You feel emptiness inside you.\n\
You are the emptiness.\n\
You start laughing.\n\
You cannot stop laughing.\n\
You are in pain.\n\
The pain is real, the pain is human, you are able to move again.\n\
A voice echoes in the darkness 'GO BACK!\n\
The voice sounds familiar.\n\
It is your voice.\n\
You remember the mansion and Atticus.\n\
If you don't go back you fear you might be stuck in a meaningless\n\
loop in the dark void";

    }

}

// End of Mansion Loop =======================================================


// Endgame ===================================================================

const end = multiLinePrompt("\n\
You found a fake wall and entered a secret lab.\n\
In the center of the room, you see the Braithwhite family\n\
chanting in unison they are wearing yellow robes.\n\
They are surrounding Atticus who is chained up, he alternates\n\
from laughter to soft whimpers, you fear his mind is gone.\n\
A few of their members noticed you immediately.\n\
You have only two choices:\n\
\n\
You can ‘run’ or you can ‘fight’\n\
");

// Win Condition =============================================================

if (end === "fight") {
    
    console.log("\n\
You fought all the members of the family. They were\n\
all much weaker than you anticipated. Their movements\n\
were slow, they seemed malnourished and entranced by\n\
an unseen force. You quickly overcame them and freed your\n\
former student. You took the ancient tome that was on the\n\
altar and ran from the house. Interrupting the ritual sent\n\
a vortex of energy throughout the house. The shockwaves destroyed\n\
every brick in the building. When you reached the forest the\n\
torches and the cultists were gone, you helped Atticus into your\n\
car and sped away. Later that night in the safety of your hotel\n\
room you examined the t Atticus is in the corner of the room\n\
whimpering, you fear his mind is gone. tome that you took from\n\
the mansion. There was a single word on the cover NECRONOMICON.\n\
You sigh and dare not think of the terror you prevented from\n\
entering our world.");

}

// Loose Condition ===========================================================

if (end === "run") {
    
    console.log("\n\
Panic overcame you and you ran,\n\
and Cthulhu awoke.\n\
You now live in what remains of society. The world has been\n\
consumed by the spawn of Cthulhu and all that remains of\n\
humanity are the wandering madmen who have yet to be consumed,\n\
and you.");

}