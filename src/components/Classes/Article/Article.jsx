import React from 'react';


function Article(props) {
    return (
        <main>
            <div>
                <img alt={"photo"} src='https://www.w3schools.com/howto/img_avatar.png' />
                <div>
                    {props.title}
                    <br/>
                    {props.content}
                </div>
                <div>
                    {/*{props.food.title}*/}
                    {/*<br/>*/}
                    {/*{props.food.content}*/}
                </div>
            </div>
        </main>
    );
}

export default Article;
