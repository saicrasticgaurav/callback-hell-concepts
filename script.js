function savetodb(data, success, failure) {
    let internatespeed = Math.floor(Math.random() * 10) + 1;

    if (internatespeed > 4) {
        success();
    } else {
        failure();
    }
}

savetodb(
    "gaurav patil",
    () => {
        console.log("data one is saved : 1");

        savetodb(
            "papa shrikrushna patil",
            () => {
                console.log("data two was saved : 2");

                savetodb(
                    "huuuuuu",
                    () => {
                        console.log("data three was saved : 3");
                    },
                    () => {
                        console.log("connection three was failure : 3");
                    }
                );
            },
            () => {
                console.log("connection two was failure : 2");
            }
        );
    },
    () => {
        console.log("connection one was failure : 1");
    }
);