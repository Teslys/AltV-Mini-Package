'use strict';

var menuItems = [
    {
        id:"Player",
        title:"Character",
        items: [
            {
                id:"kimlik",
                title:"kimlik"
            }
        ]
    },
    {
        id:"Vehicle",
        title:"Vehicle",
        items: [
            {
                id:"doors",
                title:"Kapılar",
                items: [
                    {
                        id:"door4",
                        title:"Kaput"
                    },
                    {
                        id:"door5",
                        title:"Bagaj"
                    },
                    {
                        id:"door0",
                        title:"Kapı 1"
                    },
                    {
                        id:"door1",
                        title:"Kapı 2"
                    },
                    {
                        id:"door2",
                        title:"Kapı 3"
                    },
                    {
                        id:"door3",
                        title:"Kapı 4"
                    }
                  
                ]
            },
            {
                id:"engineon",
                title:"Motoru Aç"
            },
            {
                id:"engineoff",
                title:"Motoru Kapat"
            },
            {
                id:"carOwner",
                title:"Owner Menu",
                items:[
                    {
                        id:"setOwner",
                        title:"Aracı Devret"
                    },
                    {
                        id:"Permittodrive",
                        title:"Geçici Anahtar"
                    },
                    {
                        id:"fakeplate",
                        title:"Sahte Plaka"
                    }
                ]
            }
        ]
    },
    {
        id:"sirtla",
        title:"Kişiyi Sırtla"
    },
    {
        id:"iconoff",
        title:"İcon Kapat",
        items: [
            {
                id:"benzinlik",
                title:"Benzinlik"
            }
        ]
    }
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function () {
    var svgMenu = new RadialMenu({
        parent      : document.body,
        size        : 600,
        closeOnClick: true,
        menuItems   : menuItems,
        onClick     : function (item) {
            // console.log('You have clicked:', item.id, item.title);
            if(item.id == "engineon") { alt.emit('engineON')}
            if(item.id == "engineoff") { alt.emit('engineOFF')}

            if(item.id == "door0") { alt.emit('door',0)}
            if(item.id == "door1") { alt.emit('door',1)}
            if(item.id == "door2") { alt.emit('door',2)}
            if(item.id == "door3") { alt.emit('door',3)}
            if(item.id == "door4") { alt.emit('door',4)}
            if(item.id == "door5") { alt.emit('door',5)}
        }
    });

    var openMenu = document.getElementById('openMenu');
    // svgMenu.open();
    alt.on('openRadialMenu',() => {
        svgMenu.open();
    })
    alt.on('closeRadialMenu',() => {
        svgMenu.close()
    })
};
