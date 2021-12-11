const getDepositDDay = (deposits) => {
    try {
        const {deadline} = deposits;
        const nowDate = new Date();
        const endDate = new Date(deadline);
        endDate.setDate(endDate.getDate()+1)
        endDate.setHours(0);
        endDate.setSeconds(0);
        
        let dayDifference = endDate.getTime() - nowDate.getTime();
        const dDay = dayDifference / 86400000; // 1000 * 60 * 60 * 24

        if (dDay <= 1.0){
            dayDifference = dayDifference / 1000;
            const hour = parseInt(dayDifference / 3600); // 60 * 60
            dayDifference = dayDifference % 3600;
            const minute = parseInt(dayDifference / 60);
            const second = parseInt(dayDifference % 60);

            return `${hour}시간 ${minute}분 ${second}초`;
        }

        return parseInt(dDay) + '일';
    } catch (e) {
        return -1;
    }
};

const getDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
};

export {getDepositDDay, getDateString} ;