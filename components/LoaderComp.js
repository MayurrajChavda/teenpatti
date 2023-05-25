import { View } from 'react-native'
import { Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

const LoaderComp = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const rotation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const rotateAnimation = Animated.loop(
            Animated.timing(rotation, {
                toValue: 1,
                duration: 2000, // Duration for each rotation (in milliseconds)
                easing: Easing.linear,
                useNativeDriver: true,
            })
        );

        rotateAnimation.start(); // Start the rotation animation

        return () => rotateAnimation.stop(); // Stop the rotation animation when component unmounts
    }, []);

    const interpolatedRotation = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    useEffect(() => {
        setX(Dimensions.get('window').width);
        setY(Dimensions.get('window').height);
    });
    return (
        <View style={{ backgroundColor: 'rgba(50,50,50,0.8)', zIndex: 1, position: 'absolute', height: y, width: x }}>
            <Animated.Image source={require('../images/loading.png')}
            style={{
                height: 200, width: 200,
                top: '50%', left: '50%',
                transform: [{ translateX: -x / 4 }, { translateY: -y / 4 },{ rotate: interpolatedRotation }],

            }}>
            </Animated.Image>
        </View>
    )
}

export default LoaderComp