---
order: 3
year: 2024
title: "Collaborative Robot System"
tags: [ROS2, "MoveIt 2", "6-DOF Arm"]
summary: "A stereo-camera cobot with human pose estimation and 6-DOF arm control, from simulation to real deployment."
domain: "Hardware + Software"
kind: project
image: "https://github.com/CJxrobot/cjXrobot.github.io/blob/main/Images/HPE_1.jpg?raw=true"
---
A collaborative robot (cobot) system built around a stereo depth camera and a 6-degree-of-freedom robotic arm. Human pose estimation runs on the stereo feed to give the arm real-time awareness of people in its workspace, feeding directly into the arm's control and obstacle-avoidance algorithms so it can plan and move safely around them.

Built on ROS2 and MoveIt 2. The control stack was developed and validated in simulation (Gazebo/RViz) before being deployed unchanged onto the physical arm.

![RViz/Gazebo human pose estimation feeding the robot's awareness of nearby people](https://github.com/CJxrobot/cjXrobot.github.io/blob/main/Images/HPE_Demo.jpg?raw=true)

![MoveIt 2 manipulation planning around obstacles with a human in the workspace](https://github.com/CJxrobot/cjXrobot.github.io/blob/main/Images/OBA.jpg?raw=true)
