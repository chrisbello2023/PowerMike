import React, { useState } from 'react'
import { View, Text } from "react-native";
import styles from './styles'
import Muscles from '../muscles'
import CheckButton from '../button/small/CheckButton';

export default function ExerciseItem({data, index, onCheck}) {
    const [done, setDone] = useState(false)
    
    const handleCheckExercise = () => {
        setDone(!done)
        onCheck()
    }

    return (
        <View style={styles.area}>
            <View style={styles.exercise}>
                <Text style={styles.index}>{index}. </Text>
                {Muscles[data.muscle]}
                <View style={styles.exerciseInfo}>
                    <Text style={styles.exerciseName}>{data.name}</Text>
                    <Text style={styles.exerciseDetails}>
                        {`${data.sets} séries - ${data.reps} rep ${data.load ? `- ${data.load} kg`:``}`}
                    </Text>
                </View>
            </View>
            <CheckButton 
                onPress={handleCheckExercise} 
                selected={done}
            />
        </View>
    )
}