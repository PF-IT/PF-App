import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function RusWelcome({ navigation }: any) {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.text} category='h1'>Welcome</Text>
                <Text style={styles.text} category='p1'>
                    You are looking at Rusbogen 2019.
                    Rusbogen is here to help you get an insight of the academical and logistic part of DTU.
                    You will find practical information about the daily life as a DTU student, everyday life,
                    and some of the opportunities available through DTU and Polyteknisk Forening,
                    the student association at DTU.
                    </Text>
                <Text style={styles.text} category='h1'>Welcome from PF</Text>
                <Text style={styles.text} category='p1'>
                    Dear new fellow students, welcome to the Technical University of Denmark!

                    You are now facing a lot of exciting, challenging, and not to forget, fun years at a university, which prepares you to solve the challenges of tomorrow. At DTU, your only limitation is your imagination.

                    You have been accepted to a world-class university with big expectations to its students. We as students likewise have big expectations to DTU. In Polyteknisk Forening, we work together to ensure that DTU is the best university possible.

                    Polyteknisk Forening (PF) is the oldest student association in Denmark, and we are still standing strong. We represent all students at DTU and work to ensure a good study environment. PF manages S-Huset which you can use as a place for studying or to grab a beer with your friends. Through PF, you can obtain a strong social and academic network, which can become a great asset in your career and make your time at the university fantastic. I hope that you will become a member and thereby ensure the voice of the students.

                    If you need help, you are always welcome to drop by our office at Lyngby Campus or Ballerup Campus or write us an email. We will happily help you.

                    I am looking forward to seeing, how you and your fellow students will impact DTU and PF.

                    Welcome to DTU and good look with your studies!
                </Text>
                <Text style={styles.text} category='h1'>Welcome from DTU</Text>
                <Text style={styles.text} category='p1'>
                    Dear new DTU student,

                    We welcome you to DTU and to a study programme where you will both acquire theoretical knowledge and be given ample opportunity to help solve some of the many challenges our society is facing.

                    Never before has the world so desperately needed creative engineers who can create technology that will help us fulfil the UN’s 17 Sustainable

                    Development Goals and achieve a better life for all of us.

                    At DTU, we incorporate sustainability, innovation, and entrepreneurship into all our study programmes. During your studies, you will be taught to come up with new solutions and to collaborate with others across disciplines.

                    DTU is one of Europe’s top elite technical universities, and we expect a lot from you. I will not hide the fact that it takes hard work to complete a study programme at DTU, but in turn you will graduate from one of the world’s very best engineering programmes.

                    And remember to enjoy your studies. Take advantage of the opportunities our world-class research and study facilities give you. Travel the world, study a semester or two abroad, and enjoy the many friendships you will form across nationalities and disciplines during your time at DTU.

                    Good luck with your studies—I will see you on the rustrip, where the Dean of Undergraduate Studies and Student Affairs and I will visit all of you.
                    </Text>
                <Text style={styles.text} category='h1'>Bachelor study start</Text>
                <Text style={styles.text} category='p1'>
                    It is very important for DTU and Polyteknisk Forening, that you, as a newly started rus at DTU, have a great start on your study program. You are therefore given the opportunity to participate in an introduction day and to sign up for a rustrip. Every year, around 260 vectors (rus guides) are educated to help you through your first semester.

                    <Text category='p2'>Introduction day</Text>

                    Introduction day is your first day at DTU. You will meet you new fellow students from your study program and be introduce to some of the things, that you will use as a newly started student at DTU.

                    Introduction day is the 23rd of August, which is before the rustrip and your first lecture. You will be shown around campus, so that you will quickly learn your way around campus, and feel at home on your new study program. During the day there will be a lot of fun social and academic activities, where you will cooperate, be creative and get to know your fellow students. Every BSc and BEng student are officially welcomed by president of DTU Anders Overgaard Bjarklev, Dean Lars Christoffersen and President of Polyteknisk Forening, Søren Anton Steffensen Kuhberg.

                    <Text category='p2'>Vector group</Text>

                    You will be placed in a vector group along with other from you study program when you start. A vector group contains of 8-13 russes and one vector. This group meets once every week for a cake-meeting, mostly during the lunch breaks. You will receive important information about upcoming events on DTU and you can ask your vector for advice. Cake-meetings are held until the beginning of your 2. semester to secure that you get the best possible study start.

                    <Text category='p2'>KABS</Text>

                    KABS is short for Coordinator of the Bachelor Study start and consists of a group of students from each bachelor study program at DTU. You will meet your study-programme-KABS on the introduction day, and a KABS from another study program - your cross-KABS - on the rustrip. KABS have the main responsibility for all the vectors, and that you get the best start. You can ask KABS about everything, and they will do their best to help you.

                    <Text category='p2'>Rustrip</Text>

                    At the summer study start, there are 30 different rustrips, that vary in size from 40 to around 150 participants. Three of these rustrips are weekend trips that take place the 23. - 25. August 2019. One of these rustrips is non-alcoholic. The rest of the rustrips are four days long and take place on either 24. - 27. August or 27. - 30. August 2019. Every rustrip has besides a KABS and vectors a cabin bum team that consists of 3-7 students, who provide food. Every rustrip gets a visit from the board of PF, Ingeniørforeningen Danmark (IDA) and the President and Dean of DTU. Team Building, networking and of course lot partying is the center of focus during the rustrip.

                    <Text category='p2'>Cross teams</Text>

                    On the rustrip vector groups from different study programs will meet and you will be teamed up with students from other programs in a cross team. This means that you will meet a lot of students from different study programs than the one that you study. This creates a good basis for you to be able to build a large network and a good relationship with your fellow students from the very beginning of your study period.
                    </Text>
                <Text style={styles.text} category='h1'>Master study start</Text>
                <Text style={styles.text} category='p1'>
                    As a new master- or exchange student at DTU, you have the option of participating in a study start that will give you a good start to your time at DTU. The study start includes an Introduction Week, a cabin trip, and a bunch of events during the semester for you - regardless of whether you have finished your bachelor at DTU or not.

                    Introduction Week

                    All new master- and exchange students get the offer of participating in the Introduction Week. Here you will be introduced to life as a student at DTU, all the student activities, and to Lyngby and Copenhagen - all while you get to meet other new students. It is a fun week with a lot of varying activities from salsa workshops to a treasure hunt around Copenhagen. Introduction Week is from the 26th - 30th of August and mainly takes place at Lyngby Campus.

                    Buddy groups

                    Participants in Introduction Week will be placed in buddy groups consisting of 10-15 students from different study lines and different nationalities. Each team is assigned a DTU student, their Buddy. When Introduction Week is over, you can keep in contact with your buddy group, and you are always welcome to ask your Buddy should you have any questions.

                    Cabin trip

                    You also have the option of going on a cabin trip i the fall. Here you get a weekend filled with both social and academic activities together with students from different study lines at DTU. Therefore it is a great way to get to know new people. The cabin trip is from 20th - 22nd of September.

                    PF Master Students

                    The people arranging the master study start are called PF Master Students, and it is also these guys who plan events during the semester. If you would like to see their events and get information about things like when they are looking for new Buddies, follow their Facebook page.

                    You can read more about the master study start at https://studiestart.pf.dk/master/.
                    </Text>
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create(
    {
        contentContainer: {
            alignItems: 'center'
        },
        text: {
            margin: 2,
        }
    }
);