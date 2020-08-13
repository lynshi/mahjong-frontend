import React, {useState} from "react";
import { useRouter } from 'next/router'

import Container from '../components/util/container';

import Description from '../components/util/description';
import Layout from '../components/util/layout';
import Title from '../components/util/title';
import SubmitButton from '../components/util/SubmitButton';

export default function Lobby() {
    return (
        <Layout footer={false}>
            <Container>
            </Container>
        </Layout>
    )
}
