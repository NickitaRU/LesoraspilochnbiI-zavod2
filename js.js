// начало задавания переменных
var tableSizeX = Number(document.body.clientWidth)
var tableSizeY = Number(window.screen.height)
var factory4Topmargin = window.screen.height- 550
var factory3Topmargin = window.screen.height - 700
var forest_factory_levelChoose = 0
var forest_factory_level_num = 0
var forest_factory_pbs_num = 0
var resursesLogs_num = 0
var forest_factory_nlc_num = 5
var forest_factory_pbc_num = 50
var forest_factory_pt= 600
var forest_factory_nlc_status = [false,false,false]
var forest_factory_nlc_num_list = []
var forest_factory_upgrade_percent = 25
var forest_factory_pbc_upgrade_num = 0
var forest_factory_pbs_upgrade_num = 0
var forest_factory_pbs_statuse = false
var forest_factory_pbs_tree_statuse = false
var ofice_mxp_num = 100
var ofice_mnp_num = 10
var ofice_nlc_num = 50 + (50*0.1)
var ofice_mxp_upgrade_num = 0
var ofice_mnp_upgrade_num = 0
var ofice_nlc_upgrade_num = 0
var ofice_maxmax_value = 0
var ofice_upgrade_percent = 17.5
var ofice_levelChoose = 0
var ofice_interval_num = 0
var ofice_intervalMax_num = 699
var ofice_lot$_num = []
var ofice_lot_quantly_num = []
var money_num = 0
let parent = document.getElementById("ofice_ut")
let elem = document.getElementById("forest_factory_x1")
let clone = elem.cloneNode("true")
var ofice_max_value = 0
var ofice_nlc_max_num = 0
var ofice_level_num = 1
var ofice_level_upgrade_num = 0
var ofice_nlc_status = [false,false,false]
var ofice_nlc_num_list = []
var ofice_soldMatirial = 0
var boardF_psw_num = 55
var boardF_machine_id = 1
var boardF_add_lv = 800
var machine = document.getElementById("machine"+boardF_machine_id)
var saw = document.getElementById("saw"+boardF_machine_id)
var styletype = ""
var boardF_work = [0]
var boardFWork_timer = [0]
var btimer = document.getElementById("boardF_timer"+boardF_machine_id)
var resursesBoard_num = 0
var boardF_boughtMachines = 0
var lotItems = []
// конец задавания переменных
for(i=0;i<=2;i++){
    clone = elem.cloneNode("true")
    parent.appendChild(clone)
    clone.id = "ofice_fullframe"+i
    clone.style.width = "100px"
    clone.style.position = "absolute"
    clone.zIndex = "2"
    clone.src = "img/fullFrame.png"
    clone.style.left = i*100+"px"
    if(i>0){
        clone.style.visibility = "hidden"
    }
}
for(i=0;i<=3;i++){
    clone = elem.cloneNode("true")
    parent.appendChild(clone)
    switch(i){
        case 0:
            clone.id = String("ofice_x1")
            clone.style.width = "100px"
            clone.style.position = "absolute"
            clone.zIndex = "3"
            clone.style.left = "0px"
            break; 
        case 1:
            clone.id = String("ofice_x5")
            clone.src = "img/x5.png"
            clone.style.width = "100px"
            clone.style.position = "absolute"
            clone.zIndex = "3"
            clone.style.left = "100px"
            break;
        case 2:
            clone.id = String("ofice_x10")
            clone.src = "img/x10.png"
            clone.style.width = "100px"
            clone.style.position = "absolute"
            clone.zIndex = "3"
            clone.style.left = "200px"
            break;
        case 3:
            clone.id = String("ofice_upgrade")
            clone.src = "img/upgrade.png"
            clone.style.height = "100px"
            clone.style.position = "absolute"
            clone.zIndex = "3"
            clone.style.left = "300px"
            break;
    }
}

factory3.style.marginTop = factory3Topmargin+"px"
main_menu.style.width = tableSizeX+"px"
main_menu.style.height = tableSizeY-100+"px"
forest_factory.style.width = tableSizeX+"px"
forest_factory.style.height = tableSizeY-100+"px"
ofice.style.width = tableSizeX+"px"
ofice.style.height = tableSizeY-100+"px"
boardF.style.width = tableSizeX+"px"
boardF.style.height = tableSizeY+"px"
forest_factory_tree.style.left = tableSizeX/2-forest_factory_tree.width/2+"px"
// forest_factory_tree.style.top = tableSizeY/2-200+"px"
upgraiding_table_for_forest_factory.style.left = tableSizeX-parseInt(upgraiding_table_for_forest_factory.style.width)+"px"
machine.style.width = saw.clientWidth+"px"
btimer.style.width = machine.clientWidth+"px"

function showFactory(factoryNumber){
    switch(factoryNumber){
        case 0:
            forest_factory.style.visibility = "visible"
            fullFrame = document.getElementById("forest_factory_fullFrame" + forest_factory_levelChoose)
            fullFrame.style.visibility = "visible"
            break;
        case 2:
            if(forest_factory_level_num>=5){
            boardF.style.visibility = "visible"}
            break;
        case 3:
            ofice.style.visibility = "visible"
            fullFrame = document.getElementById("ofice_fullframe" + ofice_levelChoose)
            fullFrame.style.visibility = "visible"
            break;
    }
}
function closeFactory(factoryNumber){
    switch(factoryNumber){
        case 0:
            forest_factory.style.visibility = "hidden"
            fullFrame = document.getElementById("forest_factory_fullFrame"+forest_factory_levelChoose)
            fullFrame.style.visibility = "hidden"
            break;
        case 2:
            boardF.style.visibility = "hidden"
            break;
        case 3:
            ofice.style.visibility = "hidden"
            fullFrame = document.getElementById("ofice_fullframe"+ofice_levelChoose)
            fullFrame.style.visibility = "hidden"
            break;
    }
}
function start(){
    forest_factory_x1.addEventListener("mouseover", function(){
        fullFrame = document.getElementById("forest_factory_fullFrame0")
        fullFrame.style.visibility = "visible"
    })
    
    forest_factory_x5.addEventListener("mouseover", function(){
        fullFrame = document.getElementById("forest_factory_fullFrame1")
        fullFrame.style.visibility = "visible"
    })
    
    forest_factory_x10.addEventListener("mouseover", function(){
        fullFrame = document.getElementById("forest_factory_fullFrame2")
        fullFrame.style.visibility = "visible"
    
    })
    
    ofice_x1.addEventListener("mouseover", function(){
        frame = document.getElementById("ofice_fullframe0")
        frame.style.visibility = "visible"
    })
    
    ofice_x5.addEventListener("mouseover", function(){
        frame = document.getElementById("ofice_fullframe1")
        frame.style.visibility = "visible"
    })
    
    ofice_x10.addEventListener("mouseover", function(){
        frame = document.getElementById("ofice_fullframe2")
        frame.style.visibility = "visible"
    })

    forest_factory_x1.addEventListener("mouseout", function(){
        fullFrame = document.getElementById("forest_factory_fullFrame0")
        if(forest_factory_levelChoose!=0){
            fullFrame.style.visibility = "hidden"
        }
    })
    
    forest_factory_x5.addEventListener("mouseout", function(){
        fullFrame = document.getElementById("forest_factory_fullFrame1")
        if(forest_factory_levelChoose!=1){
            fullFrame.style.visibility = "hidden"
        }
    })
    
    forest_factory_x10.addEventListener("mouseout", function(){
        fullFrame = document.getElementById("forest_factory_fullFrame2")
        if(forest_factory_levelChoose!=2){
            fullFrame.style.visibility = "hidden"
        }
    })
    
    ofice_x1.addEventListener("mouseout",function(){
        frame = document.getElementById("ofice_fullframe0")
        if(ofice_levelChoose!=0){
            frame.style.visibility = "hidden"
        }
    })
    
    ofice_x5.addEventListener("mouseout",function(){
        frame = document.getElementById("ofice_fullframe1")
        if(ofice_levelChoose!=1){
            frame.style.visibility = "hidden"
        }
    })
    
    ofice_x10.addEventListener("mouseout",function(){
        frame = document.getElementById("ofice_fullframe2")
        if(ofice_levelChoose!=2){
            frame.style.visibility = "hidden"
        }
    })
    
    forest_factory_x1.addEventListener("click", function(){
        for(i=0;i<=2;i++){
            fullFrame = document.getElementById("forest_factory_fullFrame"+i)
            fullFrame.style.visibility = "hidden"   
        }
        forest_factory_levelChoose=0
        fullFrame = document.getElementById("forest_factory_fullFrame0")
        fullFrame.style.visibility = "visible"
    })
    
    forest_factory_x5.addEventListener("click", function(){
        for(i=0;i<=2;i++){
            fullFrame = document.getElementById("forest_factory_fullFrame"+i)
            fullFrame.style.visibility = "hidden"   
        }
        forest_factory_levelChoose=1
        fullFrame = document.getElementById("forest_factory_fullFrame1")
        fullFrame.style.visibility = "visible"
    })
    
    forest_factory_x10.addEventListener("click", function(){
        for(i=0;i<=2;i++){
            fullFrame = document.getElementById("forest_factory_fullFrame"+i)
            fullFrame.style.visibility = "hidden"   
        }
        forest_factory_levelChoose=2
        fullFrame = document.getElementById("forest_factory_fullFrame2")
        fullFrame.style.visibility = "visible"
    })
    
    ofice_x1.addEventListener("click", function(){
        for(i=0;i<=2;i++){
            fullFrame = document.getElementById("ofice_fullframe"+i)
            fullFrame.style.visibility = "hidden"   
        }
        ofice_levelChoose=0
        fullFrame = document.getElementById("ofice_fullframe0")
        fullFrame.style.visibility = "visible"
    })
    
    ofice_x5.addEventListener("click", function(){
        for(i=0;i<=2;i++){
            fullFrame = document.getElementById("ofice_fullframe"+i)
            fullFrame.style.visibility = "hidden"   
        }
        ofice_levelChoose=1
        fullFrame = document.getElementById("ofice_fullframe"+ofice_levelChoose)
        fullFrame.style.visibility = "visible"
    })
    
    ofice_x10.addEventListener("click", function(){
        for(i=0;i<=2;i++){
            fullFrame = document.getElementById("ofice_fullframe"+i)
            fullFrame.style.visibility = "hidden"   
        }
        ofice_levelChoose=2
        fullFrame = document.getElementById("ofice_fullframe"+ofice_levelChoose)
        fullFrame.style.visibility = "visible"
    })

    forest_factory_tree.addEventListener("click", function(){
        if(!forest_factory_pbs_tree_statuse&&forest_factory_pt==600){
            interval = setInterval(function(){
                forest_factory_pt--
                forest_factory_p.style.height = forest_factory_pt + "px"
                if(forest_factory_pt==0){
                    resursesLogs_num += forest_factory_pbc_num
                    resursesLogs.innerHTML =+ resursesLogs_num
                    clearInterval(interval)
                    forest_factory_pt=600
                }  
            }, 16.7)
        }
    })

    ofice_upgrade.addEventListener("mouseover", function(){
        switch(ofice_levelChoose){
            case 0:
                if(!ofice_nlc_status[0]){
                    ofice_nlc_num_list[0] = Math.ceil((ofice_upgrade_percent/100)*ofice_nlc_num)*1
                    ofice_nlc_num += ofice_nlc_num_list[0]
                    ofice_nlc.innerHTML = String(""+Number(ofice_nlc_num))
                    ofice_nlc_status[0] = true
                }
                ofice_mnp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mnp_num)
                ofice_mnp_upgrade.innerHTML = String("+ "+ofice_mnp_upgrade_num)
                ofice_mxp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mxp_num)
                ofice_mxp_upgrade.innerHTML = String("+ "+ofice_mxp_upgrade_num)
                ofice_level_upgrade.innerHTML = "+ 1"
                ofice_nlc_num_list
                ofice_level_upgrade_num = 1
                break;
            case 1:
                if(!ofice_nlc_status[1]){
                    ofice_nlc_num_list[1] = Math.ceil((ofice_upgrade_percent/100)*ofice_nlc_num)*5
                    ofice_nlc_num += ofice_nlc_num_list[1]
                    ofice_nlc.innerHTML = String(""+Number(ofice_nlc_num))
                    ofice_nlc_status[1] = true
                }
                ofice_mnp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mnp_num)*5
                ofice_mnp_upgrade.innerHTML = String("+ "+ofice_mnp_upgrade_num)
                ofice_mxp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mxp_num)*5
                ofice_mxp_upgrade.innerHTML = String("+ "+ofice_mxp_upgrade_num)
                ofice_level_upgrade.innerHTML = "+ 5"
                ofice_level_upgrade_num = 5
                break;
            case 2:
                if(!ofice_nlc_status[2]){
                    ofice_nlc_num_list[2] = Math.ceil((ofice_upgrade_percent/100)*ofice_nlc_num)*10
                    ofice_nlc_num += ofice_nlc_num_list[2]
                    ofice_nlc.innerHTML = String(""+Number(ofice_nlc_num))
                    ofice_nlc_status[2] = true
                }
                ofice_mnp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mnp_num)*10
                ofice_mnp_upgrade.innerHTML = String("+ "+ofice_mnp_upgrade_num)
                ofice_mxp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mxp_num)*10
                ofice_mxp_upgrade.innerHTML = String("+ "+ofice_mxp_upgrade_num)
                ofice_level_upgrade.innerHTML = "+ 10"
                ofice_level_upgrade_num = 10
                break;
        }
    })

    ofice_upgrade.addEventListener("click", function(){
        if(ofice_nlc_num<=money_num){
            money_num-= ofice_nlc_num
            ofice_mnp_num += ofice_mnp_upgrade_num
            ofice_mnp.innerHTML = ofice_mnp_num
            ofice_mxp_num += ofice_mxp_upgrade_num
            ofice_mxp.innerHTML = ofice_mxp_num
            ofice_level_num += ofice_level_upgrade_num
            ofice_level.innerHTML = ofice_level_num
            ofice_level_upgrade.innerHTML = ""
            ofice_mnp_upgrade.innerHTML = ""
            ofice_mxp_upgrade.innerHTML = ""
            ofice_nlc_status[0] = false
            ofice_nlc_status[1] = false
            ofice_nlc_status[2] = false
            money.innerHTML = money_num
            
        switch(ofice_levelChoose){
            case 0:
                if(!ofice_nlc_status[0]){
                    ofice_nlc_num_list[0] = Math.ceil((ofice_upgrade_percent/100)*ofice_nlc_num)*1
                    ofice_nlc_num += ofice_nlc_num_list[0]
                    ofice_nlc.innerHTML = String(""+Number(ofice_nlc_num))
                    ofice_nlc_status[0] = true
                }
                ofice_mnp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mnp_num)
                ofice_mnp_upgrade.innerHTML = String("+ "+ofice_mnp_upgrade_num)
                ofice_mxp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mxp_num)
                ofice_mxp_upgrade.innerHTML = String("+ "+ofice_mxp_upgrade_num)
                ofice_level_upgrade.innerHTML = "+ 1"
                ofice_level_upgrade_num = 1
                break;
            case 1:
                if(!ofice_nlc_status[1]){
                    ofice_nlc_num_list[1] += Math.ceil((ofice_upgrade_percent/100)*ofice_nlc_num)*5
                    ofice_nlc_num += ofice_nlc_num_list[1]
                    ofice_nlc.innerHTML = String(""+Number(ofice_nlc_num))
                    ofice_nlc_status[1] = true
                }
                ofice_mnp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mnp_num)*5
                ofice_mnp_upgrade.innerHTML = String("+ "+ofice_mnp_upgrade_num)
                ofice_mxp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mxp_num)*5
                ofice_mxp_upgrade.innerHTML = String("+ "+ofice_mxp_upgrade_num)
                ofice_level_upgrade.innerHTML = "+ 5"
                ofice_level_upgrade_num = 5
                break;
            case 2:
                if(!ofice_nlc_status[2]){
                    ofice_nlc_num_list[2] += Math.ceil((ofice_upgrade_percent/100)*ofice_nlc_num)*10
                    ofice_nlc_num += ofice_nlc_num_list[2]
                    ofice_nlc.innerHTML = String(""+Number(ofice_nlc_num))
                    ofice_nlc_status[2] = true
                }
                ofice_mnp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mnp_num)*10
                ofice_mnp_upgrade.innerHTML = String("+ "+ofice_mnp_upgrade_num)
                ofice_mxp_upgrade_num = Math.ceil((ofice_upgrade_percent/100)*ofice_mxp_num)*10
                ofice_mxp_upgrade.innerHTML = String("+ "+ofice_mxp_upgrade_num)
                ofice_level_upgrade.innerHTML = "+ 10"
                ofice_level_upgrade_num = 10
                break;
            }
        }
    })

    forest_factory_upgrade.addEventListener("mouseover", function(){
        switch(forest_factory_levelChoose){
            case 0:
                if(!forest_factory_nlc_status[0]){
                    forest_factory_nlc_num_list[0] = Math.ceil((forest_factory_upgrade_percent/100)*ofice_nlc_num)*1
                    forest_factory_nlc_num += forest_factory_nlc_num_list[0]
                    forest_factory_nlc.innerHTML = String(""+Number(forest_factory_nlc_num))
                    forest_factory_nlc_status[0] = true
                }
                if(forest_factory_level_num>=4&&!forest_factory_pbs_statuse){
                    forest_factory_pbs_upgrade_num = 5.1
                    forest_factory_pbs_upgrade.innerHTML = String("+"+forest_factory_pbs_upgrade_num)
                    forest_factory_pbs_statuse = true
                }
                forest_factory_pbc_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbc_num)
                forest_factory_pbc_upgrade.innerHTML = String("+ "+forest_factory_pbc_upgrade_num)
                forest_factory_pbs_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbs_num)
                forest_factory_pbs_upgrade.innerHTML = String("+ "+forest_factory_pbs_upgrade_num)
                forest_factory_level_upgrade.innerHTML = "+ 1"
                forest_factory_level_upgrade_num = 1
                break;
            case 1:
                if(!forest_factory_pbs_statuse){
                    forest_factory_pbs_num = 5.1
                    forest_factory_pbs_statuse = true
                    forest_factory_pbs_upgrade.innerHTML = String("+ "+forest_factory_pbs_upgrade_num)
                }
                if(!forest_factory_nlc_status[1]){
                    forest_factory_nlc_num_list[1] = Math.ceil((forest_factory_upgrade_percent/100)*ofice_nlc_num)*5
                    forest_factory_nlc_num += forest_factory_nlc_num_list[1]
                    forest_factory_nlc.innerHTML = String(""+Number(forest_factory_nlc_num))
                    forest_factory_nlc_status[1] = true
                }
                forest_factory_pbc_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbc_num)*5
                forest_factory_pbc_upgrade.innerHTML = String("+ "+forest_factory_pbc_upgrade_num)
                forest_factory_pbs_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbs_num)*5
                forest_factory_pbs_upgrade.innerHTML = String("+ "+forest_factory_pbs_upgrade_num)
                forest_factory_level_upgrade.innerHTML = "+ 5"
                forest_factory_level_upgrade_num = 5;
            case 2:
                if(!forest_factory_nlc_status[2]){
                    forest_factory_nlc_num_list[2] = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_nlc_num)*10
                    forest_factory_nlc_num += forest_factory_nlc_num_list[2]
                    forest_factory_nlc.innerHTML = String(""+Number(ofice_nlc_num))
                    forest_factory_nlc_status[2] = true
                }
                if(!forest_factory_pbs_statuse){
                    forest_factory_pbs_upgrade_num = 5.1;
                    forest_factory_pbs_upgrade.innerHTML = String(" +"+forest_factory_pbc_upgrade_num);
                    forest_factory_pbs_statuse = true
                }
                forest_factory_pbc_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbc_num)*10
                forest_factory_pbc_upgrade.innerHTML = String("+ "+forest_factory_pbc_upgrade_num)
                forest_factory_pbs_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbs_num)*10
                forest_factory_pbs_upgrade.innerHTML = String("+ "+forest_factory_pbs_upgrade_num)
                forest_factory_level_upgrade.innerHTML = "+ 10"
                forest_factory_level_upgrade_num = 10
                break;
        }
    })

    forest_factory_upgrade.addEventListener("click", function(){
        if(forest_factory_nlc_num<=money_num){
            money_num-= forest_factory_nlc_num
            forest_factory_pbc_num += forest_factory_pbc_upgrade_num
            forest_factory_pbc.innerHTML = forest_factory_pbc_num
            forest_factory_pbs_num += forest_factory_pbs_upgrade_num
            forest_factory_pbs.innerHTML = forest_factory_pbs_num
            forest_factory_level_num += forest_factory_level_upgrade_num
            forest_factory_level.innerHTML = forest_factory_level_num
            forest_factory_level_upgrade.innerHTML = ""
            forest_factory_pbc_upgrade.innerHTML = ""
            forest_factory_pbs_upgrade.innerHTML = ""
            forest_factory_nlc_status[0] = false
            forest_factory_nlc_status[1] = false
            forest_factory_nlc_status[2] = false
            money.innerHTML = money_num
            if(forest_factory_pbs_statuse){
                forest_factory_pbs_tree_statuse= true
                factory2.src = "img/sawmill.png"
            }
            switch(forest_factory_levelChoose){
                case 0:
                    if(!forest_factory_nlc_status[0]){
                        forest_factory_nlc_num_list[0] = Math.ceil((forest_factory_upgrade_percent/100)*ofice_nlc_num)*1
                        forest_factory_nlc_num += forest_factory_nlc_num_list[0]
                        forest_factory_nlc.innerHTML = String(""+Number(forest_factory_nlc_num))
                        forest_factory_nlc_status[0] = true
                    }
                    forest_factory_pbc_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbc_num)
                    forest_factory_pbc_upgrade.innerHTML = String("+ "+forest_factory_pbc_upgrade_num)
                    forest_factory_pbs_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbs_num)
                    forest_factory_pbs_upgrade.innerHTML = String("+ "+forest_factory_pbs_upgrade_num)
                    forest_factory_level_upgrade.innerHTML = "+ 1"
                    forest_factory_level_upgrade_num = 1
                    break;
                case 1:
                    if(!forest_factory_nlc_status[1]){
                        forest_factory_nlc_num_list[1] = Math.ceil((forest_factory_upgrade_percent/100)*ofice_nlc_num)*5
                        forest_factory_nlc_num += forest_factory_nlc_num_list[1]
                        forest_factory_nlc.innerHTML = String(""+Number(forest_factory_nlc_num))
                        forest_factory_nlc_status[1] = true
                    }
                    forest_factory_pbc_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbc_num)*5
                    forest_factory_pbc_upgrade.innerHTML = String("+ "+forest_factory_pbc_upgrade_num)
                    forest_factory_pbs_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbs_num)*5
                    forest_factory_pbs_upgrade.innerHTML = String("+ "+forest_factory_pbs_upgrade_num)
                    forest_factory_level_upgrade.innerHTML = "+ 5"
                    forest_factory_level_upgrade_num = 5
                    break;
                case 2:
                    if(!forest_factory_nlc_status[2]){
                        forest_factory_nlc_num_list[2] = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_nlc_num)*10
                        forest_factory_nlc_num += forest_factory_nlc_num_list[2]
                        forest_factory_nlc.innerHTML = String(""+Number(ofice_nlc_num))
                        forest_factory_nlc_status[2] = true
                    }
                    forest_factory_pbc_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbc_num)*10
                    forest_factory_pbc_upgrade.innerHTML = String("+ "+forest_factory_pbc_upgrade_num)
                    forest_factory_pbs_upgrade_num = Math.ceil((forest_factory_upgrade_percent/100)*forest_factory_pbs_num)*10
                    forest_factory_pbs_upgrade.innerHTML = String("+ "+forest_factory_pbs_upgrade_num)
                    forest_factory_level_upgrade.innerHTML = "+ 10"
                    forest_factory_level_upgrade_num = 10
                    break;
            }
        }
    })

    boardF_add.addEventListener("click",function(){
        if(money_num>=boardF_psw_num){
            if(boardF_machine_id!=3){
                money_num-=boardF_psw_num
                money.innerHTML = money_num
                
                machine = document.getElementById("saw"+boardF_machine_id)
                machine.classList.remove("blink")
                boardF_bm.style.left = boardF_add_lv+"px"
                machine = document.getElementById("machine"+boardF_machine_id)
                saw = document.getElementById("saw"+boardF_machine_id)
                parent = boardF_td
                elem = document.getElementById("div")

                clone = elem.cloneNode("true")
                parent.appendChild(clone)
                boardF_machine_id++
                clone.id = "machine"+boardF_machine_id
                machine = document.getElementById("machine"+boardF_machine_id)
                parent = machine
                elem = saw

                clone = elem.cloneNode("true")
                parent.appendChild(clone)
                clone.id = "saw"+boardF_machine_id
                clone.style.width = "250px"
                machine.style.position = "absolute"
                machine.style.top = "260px"

                switch(boardF_machine_id){
                    case 2:
                        clone.classList.add("blink")
                        machine.style.left = "800px"
                        boardF_psw_num = 1000000
                        boardFWork_timer[1] = 250
                        boardF_work[1] = setInterval(function(){
                            btimer1 = document.getElementById("boardF_timer"+1)
                            boardFWork_timer[1]--
                            btimer1.style.height = String(boardFWork_timer[1] + "px")
                            if(boardFWork_timer[1]<=0&&resursesLogs_num>=4/2){
                                resursesBoard_num += 4*1
                                resursesLogs_num-= 4/2
                                resursesLogs.innerHTML = resursesLogs_num
                                resursesBoard.innerHTML =+ resursesBoard_num
                                boardFWork_timer[1]=250
                            }
                        }, (10/1))
                        break;
                    case 3 :
                        clone.classList.remove("blink")
                        elem = btimer
                        
                        parent = machine2
                        clone = elem.cloneNode("true")
                        parent.appendChild(clone)
                        clone.id =  String("boardF_timer"+2)
                        clone.classList.remove("blink")
                        clone.style.position = "absolute"
                        clone.style.top = "0px"
                        machine.style.left = "1650px"
                        boardF_bm.style.left = "1650px"
                        boardF_psw_num = 10000000000000
                        boardFWork_timer[2] = 250
                        boardF_work[2] = setInterval(function(){
                            btimer2 = document.getElementById("boardF_timer"+2)
                            boardFWork_timer[2]--
                            btimer2.style.height = String(boardFWork_timer[2] + "px")
                            if(boardFWork_timer[2]<=0&&resursesLogs_num>=20/2){
                                resursesBoard_num += 4*5
                                resursesLogs_num-= 20/2
                                resursesLogs.innerHTML = resursesLogs_num
                                resursesBoard.innerHTML =+ resursesBoard_num
                                boardFWork_timer[2]=250
                            }
                            console.log(boardFWork_timer)
                        }, (10/2))
                        break;
                }
                clone.style.height = "250px"
                boardF_psw.innerHTML = boardF_psw_num
            }else{
                clone.classList.remove("blink")
                elem = btimer        
                parent = machine3
                clone = elem.cloneNode("true")
                parent.appendChild(clone)
                clone.id = String("boardF_timer"+3)
                clone.classList.remove("timer")
                clone.classList.add("timer2") 
                machine = document.getElementById("saw"+boardF_machine_id)
                boardF_bm.style.visibility = "hidden"
                boardFWork_timer[3] = 250
                boardF_work[3] = setInterval(function(){
                    btimer3 = document.getElementById("boardF_timer"+3)
                    boardFWork_timer[3]--
                    btimer3.style.height = String(boardFWork_timer[3] + "px")
                    if(boardFWork_timer[3]<=0&&resursesLogs_num>=100/2){
                        resursesBoard_num += 4*25
                        resursesLogs_num-= 100/2
                        resursesLogs.innerHTML = resursesLogs_num
                        resursesBoard.innerHTML =+ resursesBoard_num
                        boardFWork_timer[3]=250
                    }
                }, (10/3))
            }
        }
    })

    auto_forest = setInterval(function(){
        if(forest_factory_pbs_tree_statuse){
            forest_factory_pt--
            forest_factory_p.style.height = forest_factory_pt + "px"
            if(forest_factory_pt==0){
                resursesLogs_num += forest_factory_pbs_num*10
                resursesLogs.innerHTML =+ resursesLogs_num
                forest_factory_pt=600
            }
        }
    }, 16.7)

    resursesLogs.innerHTML = resursesLogs_num + " "
    forest_factory_level.innerHTML = forest_factory_level_num
    forest_factory_pbc.innerHTML = forest_factory_pbc_num
    forest_factory_pbs.innerHTML = forest_factory_pbs_num
    forest_factory_nlc.innerHTML = forest_factory_nlc_num
    ofice_mnp.innerHTML = ofice_mnp_num
    ofice_mxp.innerHTML = ofice_mxp_num
    ofice_nlc.innerHTML = ofice_nlc_num
    ofice_level.innerHTML = ofice_level_num
    boardF_psw.innerHTML = boardF_psw_num
    resursesBoard.innerHTML = resursesBoard_num
    money.innerHTML = money_num
}
forest_factory_p.style.width = forest_factory_tree.width + "px"

function sold(lotNum){
    if(lotItems[lotNum]==0){
    money_num += Math.ceil(resursesLogs_num/ofice_lot_quantly_num[lotNum]) * ofice_lot$_num[lotNum]
    money.innerHTML = money_num
    resursesLogs.innerHTML = 0
    resursesLogs_num = 0
    }else{
        money_num += Math.ceil(resursesBoard_num/ofice_lot_quantly_num[lotNum]) * ofice_lot$_num[lotNum]
        money.innerHTML = money_num
        resursesBoard.innerHTML = 0
        resursesBoard_num = 0
    }
}

ofice_interval = setInterval(function(){
    if(ofice_interval_num==0){
        for(i=0;i<=2;i++){
            lot = document.getElementById("ofice_lot"+i)
            lotImg = document.getElementById("lot"+i+"_img")
            if(Math.floor(Math.random()*2)==0||forest_factory_level_num<=4){
                let clone = elem.cloneNode("true")
                lotImg.appendChild(clone)
                clone.src = "img/logs.png"
                clone.id ="lot_img"+i
                clone.style.width = "200px"
                clone = br.cloneNode("true")
                lotItems[i] = 0
            }else if(forest_factory_level_num>=5){
                let clone = elem.cloneNode("true")
                lotImg.appendChild(clone)
                clone.src = "img/board.png"
                clone.id ="lot_img"+i
                clone.style.width = "200px"
                clone = br.cloneNode("true")
                lotItems[i] = 1
            }
            ofice_lot$_num[i] = Math.floor(Math.random()*(ofice_mxp_num-ofice_mnp_num)+ofice_mnp_num)
            ofice_lot_quantly_num[i] = Math.floor(Math.random()*29+1)
            lot.innerHTML = String(ofice_lot$_num[i]+"$"+" за "+ofice_lot_quantly_num[i])
            
        }
    }
    if(ofice_interval_num>=699){
        for(i=0;i<=2;i++){
            lotImg = document.getElementById("lot"+i+"_img")
            lotImg.innerHTML = ""
        }
        ofice_interval_num = 0
        for(i=0;i<=2;i++){
            lot = document.getElementById("ofice_lot"+i)
            lotImg = document.getElementById("lot"+i+"_img")
            if(Math.floor(Math.random()*2)==0||forest_factory_level_num<=4){
                let clone = elem.cloneNode("true")
                lotImg.appendChild(clone)
                clone.src = "img/logs.png"
                clone.id ="lot_img"+i
                clone.style.width = "200px"
                clone = br.cloneNode("true")
            }else if(forest_factory_level_num>=5){
                let clone = elem.cloneNode("true")
                lotImg.appendChild(clone)
                clone.src = "img/board.png"
                clone.id ="lot_img"+i
                clone.style.width = "200px"
                clone = br.cloneNode("true")
            }
            ofice_lot$_num[i] = Math.floor(Math.random()*(ofice_mxp_num-ofice_mnp_num)+ofice_mnp_num)
            ofice_lot_quantly_num[i] = Math.floor(Math.random()*29+1)
            lot.innerHTML = String(ofice_lot$_num[i]+"$"+" за "+ofice_lot_quantly_num[i])
            
        }
    }
    ofice_time.style.height = (ofice_intervalMax_num - ofice_interval_num)+"px"
    ofice_interval_num++
},85.83)