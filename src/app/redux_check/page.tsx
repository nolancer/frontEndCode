"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { decrement, increment, reset } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

const ReduxCheck = () => {
    const count = useAppSelector((state) => state.counterReducer.value);
    const dispatch = useAppDispatch();

    const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

    return (
        <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>{count}</h4>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button
                    onClick={() => dispatch(decrement())}
                    style={{ marginInline: 16 }}
                >
                    decrement
                </button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>

            {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading || isFetching ? (
                <p>Loading...</p>
            ) : data ? (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gap: 20,
                    }}
                >
                    {data.map((user) => (
                        <div
                            key={user.id}
                            style={{ border: "1px solid #ccc", textAlign: "center" }}
                        >
                            <Image
                                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                                alt={user.name}
                                width={180}
                                height={180}
                            />
                            <h3>{user.name}</h3>
                        </div>
                    ))}
                </div>
            ) : null}
        </main>
    );
}
export default ReduxCheck;