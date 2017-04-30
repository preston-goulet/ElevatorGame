# ElevatorGame
Ziff Davis Code Challenge

My overarching goal of this project was to create an algorithm that would not only complete the task at hand, but would also be a practical solution in a real-world setting. I started by watching a few rounds of the game being played with some sample code that was available to see if there were any patterns in the game that I could use to my advantage. I noticed right away that floor 0 was the most used floor while the others were seemingly random. 

My algorithm consisted of creating a forEach loop that would use both of the elevators. I would then take the passengers on the elevator to the floor that was requested. If an elevator became idle at any time it would return to floor 0 because it had the most traffic. If at any time an elevator was passing a floor that had become requested from a passenger it would stop at that floor. Also, if an elevator was passing a floor where a passenger had requested a pickup, the elevator would stop there as well but only if it was going in the same direction the passenger requested.

Originally, I had my algorithm starting with picking up the passengers that had pressed the floor "up" or "down" buttons but that ended up being much slower and was eventually scrapped altogether. If this were a real-life situation then although it wouldn't deliver the most traffic at a time, it would definitely be implemented. 
