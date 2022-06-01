import React from "react";
import { TileWrapper, TileBackground, TileContent } from "./tile";
import { WorkContainer, WorkLeft, WorkRight} from "./work";
import {Image} from "next/image"

const Works = () => (
    <TileWrapper numOfPages={3}>
        <TileBackground><WorkBackground></TileBackground></TileBackground>
        <TileContent>
            <Tile page={0} renderContent={({progress}}) => (
                <WorkContainer>
                <WorkLeft progress={progress}>
                <div>We built</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">hahha</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image src="" layout="responsive" width={840} height={1620} alt="hahaha"></Image>
                </WorkRight>
                </WorkContainer>
            )}></Tile>
            <Tile page={1}} renderContent={({progress}}) => (
                <WorkContainer>
                <WorkLeft progress={progress}>
                <div>We built</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">hahha</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image src="" layout="responsive" width={840} height={1620} alt="hahaha"></Image>
                </WorkRight>
                </WorkContainer>
            )}}></Tile>
            <Tile page={2}} renderContent={({progress}}) => (
                <WorkContainer>
                <WorkLeft progress={progress}>
                <div>We built</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">hahha</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image src="" layout="responsive" width={840} height={1620} alt="hahaha"></Image>
                </WorkRight>
                </WorkContainer>
            )}}></Tile>
        </TileContent>
    </TileWrapper>
);

export default Works
