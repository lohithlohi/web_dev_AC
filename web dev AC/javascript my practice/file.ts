@Injectable()
export class PlayerService {
    playersChanged = new Subject<Player[]>();
    count: number = 7;
    private players: Player[] = [
        new Player(1, 'John', 'Doe'),
        new Player(2, 'Jane', 'Doe'),
        new Player(3, 'John', 'Doe'),
        new Player(4, 'Jane', 'Doe'),
        new Player(5, 'John', 'Doe'),
        new Player(6, 'Jane', 'Doe'),
        new Player(7, 'John', 'Doe'),
    ];

    getPlayers(){
        return this.players.slice();
    }

    generateID(){
        return this.count++;
    }

    getPlayer(id: number){
        let player = this.players.find(pl => pl.id === id);
        return player; 
    }

    addPlayer(player: Player){
        this.players.push(player);
        this.playersChanged.next(this.getPlayers());
    }

    updatePlayer(index: number, newplayer: Player){
        newplayer.description("Bowler");
        this.players[index - 1] = newplayer;
        this.playersChanged.next(this.getPlayers());
    }

    deletePlayer(index: number){
        this.players.splice(index, 1);
        this.playersChanged.next(this.getPlayers());
    }

}


export class TeamService{
    teamChanged = new EventEmitter<Player[]>();
    playerId: number;

    private team: Player[] = [];

    getTeam(){
        return this.team.slice();
    }

    editPlayer(id: number, newplayer: Player){
        const index = this.team.findIndex(pl => pl.id === id);
        if (index !== -1) {
            this.team[index] = newplayer;
        }
    }

    addPlayer( player: Player ){
        const playerexist = this.team.find(p => p.id === player.id);
        if(playerexist){
            alert('This Player already exit in your team !!');
        }else{
            this.team.push(player);
        }
    }

    deletePlayer(id: number){
        this.team = this.team.filter(pl => pl.id !== id);
    }

    getStatus(){
        var status: string[] = [];
        const noOfBatsmen = this.getTeam().filter(p => p.description === "Batsmen").length;
        const noOfBowlers = this.getTeam().filter(p => p.description === "Bowler").length;
        const noOfWicketKeeper = this.getTeam().filter(p => p.description === "Wicket keeper").length;

        if(noOfBatsmen != 2){
            status.push("")
        }
        if(noOfBowlers != 2){
            status.push("")
        }
        if(noOfWicketKeeper != 1){
            status.push("")
        }
        return status;
    }
}