import {Card, CardBody, CardFooter, cn, Link, User} from "@heroui/react";
import {GoVerified} from "react-icons/go";
import {Review} from "@/share/types/review.ts";

type ReviewCardProps = {
    review: Review;
}

function ReviewCard({review}: ReviewCardProps) {
    return (
        <Card
            className={cn(review.className)}
        >
            <CardBody className="-mb-2">
                <blockquote className={cn("text-sm text-gray-500", review.textClassName)}>
                    &quot;
                    {review.body}
                    &quot;
                </blockquote>
            </CardBody>
            <CardFooter>
                <User
                    name={review.name}
                    description={(
                        <Link
                            href={review.profileLink}
                            className="flex items-center gap-x-1 text-tiny hover:underline"
                        >
                            <GoVerified className="text-lg" />
                            {typeof review.status === 'string' ?
                                <span>{review.status}</span>
                                : <span>{review.status.join(", ")}</span>
                            }
                        </Link>
                    )}
                    avatarProps={{
                        src: `${review.img}`,
                        color: "primary",
                        className: `${review.avatarClassName}`
                    }}
                />
            </CardFooter>
        </Card>
    );
}

export { ReviewCard as default }