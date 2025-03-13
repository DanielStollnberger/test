let myObjects = {
    'name': 'Daniel',
    'age': 22,
    'job': {
        'company': 'voest',
        'work': 'proofer'
    },
    'logJob': function () {
        return 'Daniel' +' '+ myObjects.job.work+ ' at '+myObjects.job.company;
    }
};



function addPage() {
let contentRef = document.getElementById('content');
    contentRef.innerHTML= showFullJob();
    document.getElementById('content').innerHTML = myObjects.logJob();
}

function showFullJob() {
    return myObjects.job.company +' '+ myObjects.job.work +' '+myObjects.age;
}