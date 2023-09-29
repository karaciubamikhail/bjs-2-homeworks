 class AlarmClock{

    constructor(){
        this.alarmCollection=[];
        this.intervalId=null;
    }
    addClock(time, callback){
        if(!time || !callback){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if(this.alarmCollection.find(clock => clock.time === time)){
            console.warn('Уже присутствует звонок на это же время');
        }
        return this.alarmCollection.push({callback, time, canCall:true});
    }
    removeClock(time){
        this.alarmCollection=this.alarmCollection.filter((elem)=>elem.time !==time);
    }
    getCurrentFormattedTime(){
        return new Date().toTimeString().slice(0, 5);
    }
    start(){
        if(this.intervalId){
            return;
        }
            this.intervalId = setInterval(()=>{
                this.alarmCollection.forEach(call => {
                    if(call.time===this.getCurrentFormattedTime()){
                        call.canCall=false;
                        call.callback();
                    }
                });
            },1000)
    }
    stop(){
        clearInterval(this.intervalId);
        this.intervalId=null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach(call => {
            call.canCall=true;
        });
    }
    clearAlarms(){
        stop();
        this.alarmCollection=[];
    }
 }