import React, { useState } from 'react'
import './Submit.css'
import { Link } from 'react-router-dom'


const SubmitForm = (props) => {

    let tempDaysWeek = []
    let tempGoal

    //adds equipment to equipment list
    const SubmitData = () => {

        let tempEquipArr = [];

        //adding equipment to equip state array 
        let equipBox = document.getElementsByName("equipCheck");
        for (var i = 0; i < equipBox.length; i++) {
            if (equipBox[i].checked === true) {
                tempEquipArr.push(equipBox[i].id);
            }
        }
        tempEquipArr.push('Body Weight');

        //adds days in week 
        let daysinweek = ['sunday', 'monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'saturday']
        for (var i = 0; i < daysinweek.length; i++) {
            if (document.getElementById(daysinweek[i]).checked === true) {
                tempDaysWeek = [...tempDaysWeek, { name: daysinweek[i], workout: 'yes' }];
            }
        }

        props.setEquip([...tempEquipArr]);

        props.setDays([...tempDaysWeek]);

        props.setGoal(tempGoal);
    }

    //Displays Chechbox htmlFor getting equipment
    const EquipmentCheckBox = () => {
        return (
            <div id='equipment-container'>
                <div id='equipment-title'>3. Equipment</div>
                <div id='equip-description'>Personalized workout.  Personalized equipment.</div>
                <div id='EquipmentBox'>

                    <input type="checkbox" className='equipCheck' id="Dumbbells" name="equipCheck" />
                    <label htmlFor='Dumbbells' className="equip">
                        <div className='equipName'>Dumbbells</div>
                    </label>

                    <input type="checkbox" className='equipCheck' id="Bar" name="equipCheck" />
                    <label htmlFor='Bar' className="equip">
                        <div className='equipName'>BarBell</div>
                    </label>

                    <input type="checkbox" className='equipCheck' id="Band" name="equipCheck" />
                    <label htmlFor='Band' className="equip">
                        <div className='equipName'>band</div>
                    </label> 

                    <input type="checkbox" className='equipCheck' id="Rope" name="equipCheck" />
                    <label htmlFor='Rope' className="equip">
                        <div className='equipName'>Rope</div>
                    </label>

                    <input type="checkbox" className='equipCheck' id="Kettlebells" name="equipCheck" />
                    <label htmlFor='Kettlebells' className="equip">
                        <div className='equipName'>Kettlebells</div>
                    </label>

                    <input type="checkbox" className='equipCheck' id="Landmine" name="equipCheck" />
                    <label htmlFor='Landmine' className="equip">
                        <div className='equipName'>Landmine</div>
                    </label>

                    <input type="checkbox" className='equipCheck' id="Cable" name="equipCheck" />
                    <label htmlFor='Cable' className="equip">
                        <div className='equipName'>Cable</div>
                    </label>

                    <input type="checkbox" className='equipCheck' id="Machine" name="equipCheck" />
                    <label htmlFor='Machine' className="equip">
                        <div className='equipName'>Machine</div>
                    </label>

                </div>
            </div>
        )
    }

    //Handles updating days of week state
    const DaysSelect = (e) => {
        return (
            <div id='week-container'>
                <div id='week-title'>2. Weekly Schedule</div>
                <div id='week-description'>We know life gets busy. So tell us when you want to workout and we will work aROUND you</div>
                <div id='week'>
                    <input type="checkbox" className="daybtn" id="sunday" name="dayCheck" />
                    <label htmlFor='sunday' className='week-label'>
                        <div className='day'>Sunday</div>
                    </label>

                    <input type="checkbox" className="daybtn" id="monday" name="dayCheck" />
                    <label htmlFor='monday' className='week-label'>
                        <div className='day'>monday</div>
                    </label>

                    <input type="checkbox" className="daybtn" id="tuesday" name="dayCheck" />
                    <label htmlFor='tuesday' className='week-label'>
                        <div className='day'>Tuesday</div>
                    </label>

                    <input type="checkbox" className="daybtn" id="wednsday" name="dayCheck" />
                    <label htmlFor='wednsday' className='week-label'>
                        <div className='day'>Wednsday</div>
                    </label>

                    <input type="checkbox" className="daybtn" id="thursday" name="dayCheck" />
                    <label htmlFor='thursday' className='week-label'>
                        <div className='day'>Thursday</div>
                    </label>

                    <input type="checkbox" className="daybtn" id="friday" name="dayCheck" />
                    <label htmlFor='friday' className='week-label'>
                        <div className='day'>Friday</div>
                    </label>

                    <input type="checkbox" className="daybtn" id="saturday" name="dayCheck" />
                    <label htmlFor='saturday' className='week-label'>
                        <div className='day'>Saturday</div>
                    </label>

                </div>
            </div>
        )
    }

    // Handles the goal buttons
    const ExcersizeGoal = () => {
        const UpdateValue = () => {
            var selector = document.querySelector('input[name="goalCheck"]:checked');
            if (selector) {
                tempGoal = (selector.value)
            }
        }
        return (
            <div id='goal-container'>
                <div id='goal-title'>1. Workout Goal</div>

                <div id='goal-container-one' className="btn">
                    <input type="radio" className='goal-button' id='buildMobility' name="goalCheck" value="buildMobility" onChange={UpdateValue} defaultChecked={true}/>
                    <label for='buildMobility' className='goal-label'>
                        <span className='goal-label-text'>Get Mobile</span>
                        <img className='goal-image' src='https://ounews.co/wp-content/uploads/2017/12/shutterstock_552668005-e1513677714136.jpg' />
                    </label>
                </div>

                <div id='goal-container-two' className="btn">
                    <input type="radio" className='goal-button' id='buildStrength' name="goalCheck" value="buildStrength" onChange={UpdateValue} />
                    <label htmlFor='buildStrength' className='goal-label'>
                        <span className='goal-label-text'>Gain Strength</span>
                        <img className='goal-image' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heavy-duty-tire-lift-royalty-free-image-1593546343.jpg' />
                    </label>
                </div>

                <div id='goal-container-three' className="btn">
                    <input type="radio" className='goal-button' id='buildMuscle' name="goalCheck" value="buildMuscle" onChange={UpdateValue} />
                    <label htmlFor='buildMuscle' className='goal-label'>
                        <span className='goal-label-text'>Build Muscle</span>
                        <img className='goal-image' src='https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_2119,h_1414,c_scale/v1588092498/iStock-905420704.jpg' />
                    </label>
                </div>

                <div id='goal-container-four' className="btn">
                    <input type="radio" className='goal-button' id='loseFat' name="goalCheck" value="loseFat" onChange={UpdateValue} />
                    <label htmlFor='loseFat' className='goal-label'>
                        <span className='goal-label-text'>lose Fat</span>
                        <img className='goal-image' src='https://static.onecms.io/wp-content/uploads/sites/35/2021/07/23/best-cardio-exercises-promo-2000.jpg' />
                    </label>
                </div>
            </div>
        )
    }

    return (
        <div id='submitContainer'>
            <ExcersizeGoal id='goal' />
            <DaysSelect id='week' />
            <EquipmentCheckBox id='equip' />
            <div id='ButtonContainer'>
                <a id='bottomphoto' href="https://www.freepik.com/photos/fitness-equipment">Fitness equipment photo created by Rochak Shukla - www.freepik.com</a>
                <Link to='/myWorkout'><button id='submitButton' onClick={SubmitData}>Create My Schedule<span id='hoverArrow'></span></button></Link>
            </div>
        </div>
    )
}

export default SubmitForm