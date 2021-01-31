let itemDropData = null;
document.getElementById("body").style.display = "none"
alt.on('openInventory',() => {
    document.getElementById("body").style.display = "block"
})
alt.on('closeInventory',() => {
    document.getElementById("body").style.display = "none"
        if(comp.itemDropData != "") {
            itemDropData = comp.itemDropData
            alt.emit('droppedItem',itemDropData)           
        }else {
            itemDropData = null
            comp.itemDropData = []
        }
})
alt.on('droppedClear',() => {
    comp.itemDropData = []
})
alt.on('İtemData',(itemdata,i,icon,itemKG,itemType,weapon) => {
    comp.methodAddItem(itemdata.itemPosition,itemKG,itemdata.itemName,icon,itemdata.itemStatus,i,itemType,weapon)
})
alt.on('InventoryRestart',() => [
    comp.itemdata = []
])
alt.on('dropInventoryOpen',(dropdata) => {
    comp.itemDropData.push(dropdata)
    document.getElementById("body").style.display = "block"
})
alt.on('shiftPressed',(bool) => {
    comp.fastUse = bool;
})
alt.on('numberUse',(number) => {
    let fastuseNumber = comp.itemdata.find(item => item.slot == number)
    if(fastuseNumber == undefined) {return}

    comp.Use(fastuseNumber)

})
const comp = new Vue({
    el:"#inventorybody",
    data: {
        inventoryStart:true,
        inventoryKG:0,
        moveItem:false,
        lastHideX:0,
        lastHideY:0,
        downedItem:null,
        uppedItem:null,
        downedItemID: null,
        UppedItemID: null,
        uptodrop:null,
        fastUse:false,
        weaponActive:false,
        oldWeapon:null,
        itemdata:[],
        itemDropData: []
    },
    methods: {
        mousedown(e,slotid) {
            let slotIDType = typeof slotid
            let downedItem = null;
            this.downedItemID = slotid
       
            if(slotIDType == "string") {
            let splitSlotID = slotid.split('drop')
               downedItem = this.itemDropData.find(item => item.slot == parseInt(splitSlotID[1]))
            }else {
                downedItem = this.itemdata.find(item => item.slot == slotid)
            }
            if(downedItem != undefined) {
                this.downedItem = downedItem
                if(this.fastUse == true) {
                    this.Use(this.downedItem)
                    return;
                }
                this.moveItem = true
                let hideMoveElement = document.elementFromPoint(e.clientX,e.clientY)
                let moveElement = document.getElementById('hidemoveElement')
                this.lastHideX = e.clientX - moveElement.offsetWidth / 2  + 'px'
                this.lastHideY = e.clientY - moveElement.offsetHeight / 2 + 'px'
                document.querySelector('.inventorybody').addEventListener('mousemove',(e) => {
                    if(this.moveItem == true) {
                        moveElement.style.left = e.clientX - moveElement.offsetWidth / 2  + 'px'
                        moveElement.style.top = e.clientY - moveElement.offsetHeight / 2 + 'px'
                        document.getElementById('hidemoveElement').innerHTML = hideMoveElement.innerHTML
                        document.getElementById('hidemoveElement').style.display = "block"
                    }
                })
            }
        },
        mouseup(e,slotid) {
            if(this.downedItem == undefined) {return}
            if(slotid == "use") {
                this.Use(this.downedItem)
                return 
            }else if(slotid  == "give") {
                return alt.emit("give",this.downedItem)
            }
            if(slotid == null) {
                document.getElementById('hidemoveElement').style.display = "none"
                document.getElementById('hidemoveElement').style.left = this.lastHideX
                document.getElementById('hidemoveElement').style.top = this.lastHideY
                this.moveItem = false
                this.inventoryKG = 0
                this.downedItem = null;
                return;
            }
            let uppeditemdata = null
            let dropSlot;
            let CharSlot;
            if(typeof slotid == "string") {
                uppeditemdata = this.itemDropData.find(item => item.slot == parseInt(slotid.split('drop')[1]))
                if(uppeditemdata == undefined) {
                    if(typeof this.downedItemID == "string") {
                        this.UppedItemID = slotid
                        this.uppedItem = uppeditemdata
                        this.DropMoving
                    }else {
                        this.UppedItemID = slotid
                        this.uppedItem = uppeditemdata
                        this.CharToDrop
                    }
                }else {
                    this.UppedItemID = slotid
                    this.uppedItem = uppeditemdata
                    this.ChangeCharToDrop
                }
            }else {       
                uppeditemdata = this.itemdata.find(item => item.slot == parseInt(slotid)) 
                if(uppeditemdata == undefined) {
                        if(typeof this.downedItemID == "number") {
                            this.UppedItemID = slotid
                            this.uppedItem = uppeditemdata
                            this.CharMoving
                        }else {
                            this.UppedItemID = slotid
                            this.uppedItem = uppeditemdata
                            this.DropToChar
                        }
                    }else {
                        this.UppedItemID = slotid
                        this.uppedItem = uppeditemdata
                        this.ChangeDroptoChar
                    }
            }
            this.ItemLocationChange
        },
        methodAddItem(slot,itemKG,itemName,itemIcon,itemStatus,id,itemType,weapon) {
            let statusClass = null;
            if(itemStatus > 50) {
               statusClass = "statusGreen"
            }else if(itemStatus > 30 && itemStatus < 50) {
                statusClass = "statusYellow"
            }else if(itemStatus == 0) {
                itemStatus = "KIRIK"
                statusClass = "statusRed"

            } else {
                statusClass = "statusRed"
            }
            this.itemdata.push({
                id:id-1,
                slot:slot,
                itemKG:itemKG,
                itemName:itemName,
                itemIcon:itemIcon,
                itemStatus:itemStatus,
                itemStatusClass:statusClass,
                itemI:id,
                itemType:itemType,
                weapon:weapon
            })
            this.inventoryStart = true
            this.inventoryKG = 0
        },
        Use(item) {
            if(item.itemType == "food" || item.itemType == "water") {
                console.log(item.itemType)
                alt.emit("use",item)
                this.itemdata.splice(this.itemdata.indexOf(item),1)
            }
        }
    },
    computed: { 
        ItemLocationChange() {
            document.getElementById('hidemoveElement').style.display = "none"
            document.getElementById('hidemoveElement').style.left = this.lastHideX
            document.getElementById('hidemoveElement').style.top = this.lastHideY
            this.moveItem = false
            this.inventoryKG = 0
            this.downedItem = null;
        },
        CharMoving() {
            if(this.downedItem == undefined) {return}
            this.downedItem.slot = this.UppedItemID
            alt.emit('updatedItemPosition',this.downedItem.itemI,this.downedItem.slot)
        },
        DropMoving() {
            if(this.downedItem == undefined) {return}
            if(typeof this.downedItem.slot == "string") {return;}
            let IntDropSlot = this.UppedItemID.split('drop')[1]
            this.downedItem.slot = parseInt(IntDropSlot)
        },
        CharToDrop() {
            let IntDropSlot = this.UppedItemID.split('drop')[1]
            this.itemDropData.push({
                id:this.downedItem.id,
                slot:parseInt(IntDropSlot),
                itemKG:this.downedItem.itemKG,
                itemName:this.downedItem.itemName,
                itemIcon:this.downedItem.itemIcon,
                itemStatus:this.downedItem.itemStatus,
                itemStatusClass:this.downedItem.itemStatusClass,
                itemI:this.downedItem.id
            })
            this.itemdata.splice(this.itemdata.indexOf(this.downedItem),1)
        },
        DropToChar(){
            this.itemdata.push({
                id:this.downedItem.id,
                slot:this.UppedItemID,
                itemKG:this.downedItem.itemKG,
                itemName:this.downedItem.itemName,
                itemIcon:this.downedItem.itemIcon,
                itemStatus:this.downedItem.itemStatus,
                itemStatusClass:this.downedItem.itemStatusClass,
                itemI:this.downedItem.id
            })
            this.itemDropData.splice(this.itemdata.indexOf(this.downedItem),1)
        },
        ChangeDroptoChar(){
            if(typeof this.downedItemID != "string") {
                this.downedItem.slot = this.uppedItem.slot
                let uppedSlot = this.downedItemID
                return this.uppedItem.slot = parseInt(uppedSlot)
            }
            this.itemDropData[this.downedItem.id] = {
                id:this.uppedItem.id,
                slot:this.downedItem.slot,
                itemKG:this.uppedItem.itemKG,
                itemName:this.uppedItem.itemName,
                itemIcon:this.uppedItem.itemIcon,
                itemStatus:this.uppedItem.itemStatus,
                itemStatusClass:this.uppedItem.itemStatusClass,
                itemI:this.uppedItem.id 
            }
            this.itemdata[this.uppedItem.id] = {
                id:this.downedItem.id,
                slot:parseInt(this.uppedItem.slot),
                itemKG:this.downedItem.itemKG,
                itemName:this.downedItem.itemName,
                itemIcon:this.downedItem.itemIcon,
                itemStatus:this.downedItem.itemStatus,
                itemStatusClass:this.downedItem.itemStatusClass,
                itemI:this.downedItem.id 
            }
        },
        ChangeCharToDrop() {
            if(typeof this.downedItemID == "string") {
                this.downedItem.slot = this.uppedItem.slot
                let uppedSlot = this.downedItemID.split('drop')[1]
                return this.uppedItem.slot = parseInt(uppedSlot)
            }
            this.itemdata[this.downedItem.id] = {
                id:this.uppedItem.id,
                slot:this.downedItem.slot,
                itemKG:this.uppedItem.itemKG,
                itemName:this.uppedItem.itemName,
                itemIcon:this.uppedItem.itemIcon,
                itemStatus:this.uppedItem.itemStatus,
                itemStatusClass:this.uppedItem.itemStatusClass,
                itemI:this.uppedItem.id 
            }
            this.itemDropData[this.uppedItem.id] = {
                id:this.downedItem.id,
                slot:this.uppedItem.slot,
                itemKG:this.downedItem.itemKG,
                itemName:this.downedItem.itemName,
                itemIcon:this.downedItem.itemIcon,
                itemStatus:this.downedItem.itemStatus,
                itemStatusClass:this.downedItem.itemStatusClass,
                itemI:this.downedItem.id 
            }
        },
        KG() {
            for(itemdatas in this.itemdata) {
                this.inventoryKG += this.itemdata[itemdatas].itemKG
            }
            return this.inventoryKG + ' KG'
        }
    } 

})
