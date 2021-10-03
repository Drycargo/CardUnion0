class Score {
    //掼蛋规则如下：计分(rank)从2开始，按照以下规则加分：
    //-头游、二游： rank += 3;
    //-头游、三游： rank += 2;
    //-头游、末游： rank += 1;
    //rank: 2, 3, 4, 5, 6, 7, 8, 9, 10, J(11), Q(12), K(13), A(14)
    //在当前牌局rank为A时，前一局胜者需在此局中获得+3 / +2方可胜出； 若打A者接连三局均为 +1，则回到2；
    //若其中一局败（没有头游），下一次获取头游时重新回到A，尝试次数不变（！！！）
    
    //构造器
    //rank: 计分
    //aceAttempts: 打A者尝试次数
    //success: 胜利状态
    constructor(rank, aceAttempts, isMyturn, isSuccess) {
        this.rank = rank;
        this.aceAttempts = aceAttempts;
        this.isMyturn = isMyturn;
        this.isSuccess = isSuccess;
    }

    //重置一方牌局，rank回到2
    reset() {
        this.rank = 2;
        this.aceAttempts = 0;
        this.isMyturn = false;
        this.isSuccess = false;
    }

    //amount为1，2，3
    //增加计分等级；如原先等级为A，参照最上方规则
    addRank(amount) {
        if (this.rank == 14) { // A
            if(!this.isMyturn)
            {
                this.isMyturn = true;
            } else if (amount == 1) { //失败
                this.aceAttempts += 1;
                if(this.aceAttempts ==3) { //累计三次
                    this.reset();
                }
            }
            else { //胜利
                this.isSuccess = true;
            }
        } else { //其他情况
            this.rank = Math.min(14, this.rank + amount);
        }
        
        this.isMyturn = true;
    }

    //获取对应字符
    render() {
        if (this.rank == 11)
            return "J";
        else if (this.rank == 12)
            return "Q";
        else if (this.rank == 13)
            return "K";
        else if (this.rank == 14)
            return "A";
        else
            return "" + this.rank;
    }


    //设置回合
    setMyTurn(isMyTurn) {
        this.isMyturn = isMyTurn;
    }

    //获取回合
    getMyTurn() {
        return this.isMyturn;
    }

    //设置等级
    setRank(number) {
        this.rank = number;
    }

    //获取等级
    getRank() {
        return this.number;
    }

    //设置A尝试次数
    setAceAttempts(aceAttempts) {
        this.aceAttempts = aceAttempts;
    }

    //获取A尝试次数
    getAceAttempts() {
        return this.aceAttempts;
    }

    //设置胜利情况
    setSuccess(isSuccess) {
        this.isSuccess = isSuccess;
    }

    //获取胜利情况
    getSuccess() {
        return this.isSuccess;
    }
}